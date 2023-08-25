import { BidsTable, Button, CustomModal, Loader, Toast } from '@components';
import React, { useEffect, useState } from 'react';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from 'firebase';
import { useLocalStorageDataContext } from '@context';
import { ItemModalTypes, UserBidsArrayType } from './types';

export default function AdminItemModal({
  showItemModal,
  setShowItemModal,
  currentSelectedStatus,
}: ItemModalTypes) {
  const { fetchAllItems } = useLocalStorageDataContext();
  const [bidsData, setBidsData] = useState<Array<UserBidsArrayType | null>>();
  const [statusLoading, setStatusLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });

  const handleStatusSelect = async (val: string, itemId: string) => {
    setShowDropDown(false);
    try {
      setStatusLoading(true);
      const docRef = doc(db, 'items', itemId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const existingItem = docSnap.data();
        if (existingItem.status !== val) {
          existingItem.status = val;
          await updateDoc(docRef, existingItem);
          await fetchAllItems();
        }
      }
      setShowToast({
        visible: true,
        text: 'Status Updated',
      });
    } catch (err) {
      setShowToast({ text: 'Unknown Error occurred', visible: true });
    } finally {
      setStatusLoading(false);
    }
  };
  const fetchUsersOfAllBids = async () => {
    const bidsArray = currentSelectedStatus?.bids || [];

    const fetchPromises = bidsArray.map(async (element) => {
      const docRef = doc(db, 'users', element.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        return {
          ...element,
          name: userData.name as string,
          email: userData.email as string,
        };
      }
      return null;
    });

    const results = await Promise.all(fetchPromises);
    const validResults = results
      .filter((result) => result !== null)
      .sort((a, b) => Number(b?.bid) - Number(a?.bid));

    if (validResults.length > 0) {
      setBidsData(validResults);
    }
  };
  const deleteItem = async (id: string) => {
    setDeleteLoading(true);
    try {
      const itemDataRef = doc(db, 'items', `${id}`);
      await deleteDoc(itemDataRef);
      await fetchAllItems();
    } catch (e) {
      setShowToast({
        visible: true,
        text: 'Unexpected error occurred while deleting the data',
      });
    } finally {
      setDeleteLoading(false);
      setShowItemModal(false);
    }
  };
  useEffect(() => {
    fetchUsersOfAllBids();
  }, []);
  return (
    <>
      {showToast.visible && (
        <Toast
          text={showToast.text}
          visible={showToast.visible}
          setVisible={setShowToast}
        />
      )}
      <CustomModal
        isOpen={showItemModal}
        onClose={() => setShowItemModal(false)}
      >
        <div className="font-gilroy w-full h-full">
          <p className="text-center text-3xl font-bold mt-3 mb-10">
            Item Details:
          </p>
          <div className="flex flex-col w-full md:ml-5">
            <div className="flex md:flex-row flex-col">
              <img
                src={currentSelectedStatus?.fileSrc}
                alt="item"
                className="md:w-1/2 w-full h-96 object-cover"
                width={650}
                height={650}
              />
              <div className="flex flex-col md:w-1/2 w-full md:ml-5">
                <div>
                  <p className="text-4xl md:mt-0 mt-5">
                    {currentSelectedStatus?.title}
                  </p>
                  <p className="text-gray500 mt-5 mb-5">
                    {currentSelectedStatus?.description}
                  </p>
                  <span className="flex md:justify-normal justify-center md:gap-6 gap-2 mt-2 mb-5">
                    <p className="rounded-full bg-red400 text-white p-2 md:text-sm text-xs">
                      Starting Bid: {currentSelectedStatus?.startingBid}$
                    </p>
                    <p className="rounded-full bg-red400 text-white p-2 md:text-sm text-xs">
                      Current Bid: {currentSelectedStatus?.currentBid}$
                    </p>
                  </span>
                  <span className="flex md:justify-normal justify-center md:gap-6 gap-2 mt-2 mb-5">
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          id="menu-button"
                          aria-expanded="true"
                          aria-haspopup="true"
                          onClick={() => setShowDropDown(!showDropDown)}
                          disabled={statusLoading}
                        >
                          {statusLoading ? (
                            <Loader color="#000" />
                          ) : (
                            'Update Status'
                          )}
                          <svg
                            className="-mr-1 h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                      {showDropDown && (
                        <div
                          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex={-1}
                        >
                          <div className="py-1" role="none">
                            <ul>
                              <li
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray500 hover:cursor-pointer hover:text-white"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                                onClick={() =>
                                  handleStatusSelect(
                                    'sold',
                                    currentSelectedStatus?.id || '',
                                  )
                                }
                                onKeyDown={(event) => {
                                  if (
                                    event.key === 'Enter' ||
                                    event.key === ' '
                                  ) {
                                    handleStatusSelect(
                                      'sold',
                                      currentSelectedStatus?.id || '',
                                    );
                                  }
                                }}
                              >
                                Sold
                              </li>
                              <li
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray500 hover:cursor-pointer hover:text-white"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-1"
                                onClick={() =>
                                  handleStatusSelect(
                                    'live',
                                    currentSelectedStatus?.id || '',
                                  )
                                }
                                onKeyDown={(event) => {
                                  if (
                                    event.key === 'Enter' ||
                                    event.key === ' '
                                  ) {
                                    handleStatusSelect(
                                      'live',
                                      currentSelectedStatus?.id || '',
                                    );
                                  }
                                }}
                              >
                                Live
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <Button
                      type="button"
                      className="shadow-sm ring-1 ring-inset rounded px-3 py-2 text-black text-sm font-semibold hover:bg-red400 hover:text-white"
                      onClick={() =>
                        deleteItem(currentSelectedStatus?.id || '')
                      }
                    >
                      {deleteLoading ? <Loader color="#000" /> : 'Delete Item'}
                    </Button>
                  </span>
                </div>
                <BidsTable bidsData={bidsData || []} />
              </div>
            </div>
          </div>
        </div>
      </CustomModal>
    </>
  );
}
