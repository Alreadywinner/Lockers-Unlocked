import React, { useRef, useState, FormEvent, RefObject } from 'react';
import { Button, CustomModal, Input, Loader, Toast } from '@components';
import { BidDataType } from 'containers/types';
import { useLocalStorageDataContext } from 'context';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from 'firebase';
import { DetailPagePropType } from './types';
import DetailPageUI from './DetailPageUI';

type BidEntryPropType = {
  bidEntry: boolean;
  currentItem: BidDataType;
  onClose: () => void;
  loading: boolean;
  submitBid: (e: FormEvent<HTMLFormElement>) => void;
  newBidRef: RefObject<HTMLInputElement>;
};

function BidEntry({
  currentItem,
  bidEntry,
  onClose,
  loading,
  submitBid,
  newBidRef,
}: BidEntryPropType) {
  if (currentItem && currentItem.id !== '') {
    return (
      <CustomModal isOpen={bidEntry} onClose={onClose}>
        <div className="font-gilroy">
          <p className="text-center text-3xl font-bold mt-3 mb-10">
            Register Your Bid:
          </p>
          <div className="flex md:flex-row flex-col">
            <form
              className="flex flex-col items-center justify-center w-full gap-4"
              onSubmit={submitBid}
            >
              <p className="rounded-full bg-red400 text-white p-2 md:text-sm text-xs">
                Current Bid: {currentItem.bid}$
              </p>
              <div className="w-full flex flex-col gap-4">
                <label htmlFor="starting_bid">Update Current Bid *</label>
                <Input
                  ref={newBidRef}
                  type="number"
                  name="starting_bid"
                  id="starting_bid"
                  placeHolder="Enter Number"
                  className="h-9 border-solid border-2 border-red rounded pl-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-center gap-5 mt-10 w-full">
                <Button
                  type="submit"
                  className="bg-red400 text-white hover:bg-red500 md:w-3/12 w-1/2 rounded p-2"
                  disabled={loading}
                >
                  {loading ? <Loader /> : 'Submit Bid'}
                </Button>
                <Button
                  className="bg-black text-white md:w-3/12 w-1/2 rounded p-2"
                  onClick={onClose}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </CustomModal>
    );
  }
}

function DetailPage({ detailModal, setDetailModal, item }: DetailPagePropType) {
  const [bidEntry, setBidEntry] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });

  const { localStorageData, fetchAllItems } = useLocalStorageDataContext();

  const currentBidRef = useRef<BidDataType>();
  const newBidRef = useRef<HTMLInputElement>(null);

  const onBidClick = () => {
    setBidEntry(!bidEntry);
    const currentBid = item?.bids.slice(-1)[0];
    if (currentBid) {
      currentBidRef.current = currentBid;
    }
  };
  const makeBackendRequest = async (allBids: BidDataType[]) => {
    try {
      const docRef = doc(db, 'items', item?.id ? item.id : '');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const existingItem = docSnap.data();
        // Step 2: Update the bids array in the fetched document
        existingItem.bids = allBids;

        // Step 3: Save the updated document back to Firestore
        await updateDoc(docRef, existingItem);
        await fetchAllItems();
        setShowToast({
          text: 'Bid registered successfully',
          visible: true,
        });
      }
    } catch (err) {
      setShowToast({
        text: 'Failed to Update Toast',
        visible: true,
      });
    }
  };
  const submitBid = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitLoading(true);
    let allBids: Array<BidDataType> = [];
    try {
      const newBid = newBidRef.current?.value || '';
      const [itemExistOrNot] =
        item?.bids.filter((bids) => bids.id === localStorageData?.id) ?? [];
      if (Number(currentBidRef.current?.bid) >= Number(newBid)) {
        setShowToast({
          text: `Bid should be greater than : ${currentBidRef.current?.bid} $`,
          visible: true,
        });
      } else if (itemExistOrNot.id !== '' && itemExistOrNot.bid !== '') {
        allBids = [
          ...(item?.bids?.filter((bid) => bid.id !== itemExistOrNot.id) || []),
          {
            id: localStorageData?.id ?? `${localStorageData?.id}`,
            bid: newBid,
          },
        ];
        await makeBackendRequest(allBids);
      } else {
        allBids = item?.bids ?? [];
        allBids.push({
          id: localStorageData?.id ?? `${localStorageData?.id}`,
          bid: newBid,
        });
        await makeBackendRequest(allBids);
      }
    } catch (err) {
      setShowToast({
        visible: true,
        text: 'Cannot add New bid',
      });
    } finally {
      setSubmitLoading(false);
      setBidEntry(false);
    }
  };
  const onBidClose = () => {
    setBidEntry(!bidEntry);
  };
  return (
    <>
      {showToast.visible && (
        <Toast
          visible={showToast.visible}
          setVisible={setShowToast}
          text={showToast.text}
        />
      )}
      <CustomModal isOpen={detailModal} onClose={() => setDetailModal(false)}>
        {bidEntry && (
          <BidEntry
            currentItem={currentBidRef.current || { id: '', bid: '' }}
            bidEntry={bidEntry}
            onClose={onBidClose}
            submitBid={submitBid}
            loading={submitLoading}
            newBidRef={newBidRef}
          />
        )}
        <DetailPageUI
          item={item}
          onBidClick={onBidClick}
          onWithdrawClick={() => {}}
        />
      </CustomModal>
    </>
  );
}

export default DetailPage;
