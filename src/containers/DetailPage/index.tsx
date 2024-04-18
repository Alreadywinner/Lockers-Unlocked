import React, { useRef, useState, FormEvent, useEffect } from 'react';
import { CustomModal, Toast } from '@components';
import { BidDataType } from 'containers/types';
import { useLocalStorageDataContext } from 'context';
import { deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from 'firebase';
import EvaluateHighestBid from 'utils/highestBid';
import { SellerDetailPage } from '@containers';
import { DetailPagePropType } from './types';
import DetailPageUI from './DetailPageUI';

function DetailPage({ detailModal, setDetailModal, item }: DetailPagePropType) {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [withdrawLoading, setWithdrawLoading] = useState(false);
  const [sellerDetail, setSellerDetail] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [currentEnteredBid, setCurrentEnteredBid] = useState<BidDataType>();
  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });

  const { localStorageData, fetchAllItems } = useLocalStorageDataContext();

  const currentBidRef = useRef<BidDataType>();
  const newBidRef = useRef<HTMLInputElement>(null);
  const canDeleteItem =
    localStorageData?.userType === 'seller' &&
    item?.user_id === localStorageData.id;

  const onBidClick = () => {
    const currentBid = item?.bids.slice(-1)[0];
    if (currentBid) {
      const newBidValue = {
        id: currentBid.id,
        bid: newBidRef.current?.value || currentBid.bid,
        name: localStorageData?.name,
        email: localStorageData?.email,
      };
      currentBidRef.current = currentBid;
      setCurrentEnteredBid(newBidValue);
    }
  };
  useEffect(() => {
    if (currentEnteredBid === undefined) {
      onBidClick();
    }
  }, [currentEnteredBid]);
  const makeBackendRequest = async (
    allBids: BidDataType[],
    withdraw?: boolean,
  ) => {
    try {
      const docRef = doc(db, 'items', item?.id ? item.id : '');
      const docSnap = await getDoc(docRef);
      const currentHighestBid = EvaluateHighestBid(allBids);
      if (docSnap.exists()) {
        const existingItem = docSnap.data();
        // Step 2: Update the bids array in the fetched document
        existingItem.bids = allBids;
        existingItem.currentBid = currentHighestBid.bid;
        // Step 3: Save the updated document back to Firestore
        await updateDoc(docRef, existingItem);
        await fetchAllItems();
        setShowToast({
          text: withdraw
            ? 'Your Bid Withdrawn successfully'
            : 'Bid registered successfully',
          visible: true,
        });
      }
    } catch (err) {
      setShowToast({
        text: 'Failed to Update Bid',
        visible: true,
      });
    }
  };
  const onWithdrawClick = async () => {
    setWithdrawLoading(true);
    try {
      if (item?.bids && item.bids.length > 1) {
        const allBids = item.bids.filter(
          (bid) => bid.id !== localStorageData?.id,
        );
        await makeBackendRequest(allBids, true);
      } else if (item?.bids && item.bids.length === 1) {
        const allBids = item.bids;
        allBids[0].bid = item.startingBid;
        await makeBackendRequest(allBids, true);
      }
    } catch (err) {
      setShowToast({ text: 'Unknown Error occurred', visible: true });
    } finally {
      setWithdrawLoading(false);
      onBidClick();
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
      } else if (
        itemExistOrNot &&
        itemExistOrNot.id !== '' &&
        itemExistOrNot.bid !== ''
      ) {
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
      onBidClick();
    } catch (err) {
      setShowToast({
        visible: true,
        text: 'Cannot add New bid',
      });
    } finally {
      setSubmitLoading(false);
    }
  };
  const onSellerClick = () => {
    setSellerDetail(!sellerDetail);
  };
  const onDeleteClick = async () => {
    try {
      setDeleteLoading(true);
      const itemDataRef = doc(db, 'items', `${item?.id}`);
      await deleteDoc(itemDataRef);
      await fetchAllItems();
      setDetailModal(!detailModal);
    } catch (err) {
      setShowToast({
        text: 'Error Occurred While Deleting',
        visible: true,
      });
    } finally {
      setDeleteLoading(false);
    }
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
      {sellerDetail && (
        <SellerDetailPage
          item={item}
          sellerModal={sellerDetail}
          setSellerModal={setSellerDetail}
        />
      )}
      <CustomModal isOpen={detailModal} onClose={() => setDetailModal(false)}>
        <DetailPageUI
          item={item}
          currentBid={currentEnteredBid}
          onBidClick={onBidClick}
          onWithdrawClick={onWithdrawClick}
          withdrawLoading={withdrawLoading}
          onSellerClick={onSellerClick}
          canDeleteItem={canDeleteItem}
          onDeleteClick={onDeleteClick}
          deleteLoading={deleteLoading}
          submitBid={submitBid}
          newBidRef={newBidRef}
          updateLoading={submitLoading}
        />
      </CustomModal>
    </>
  );
}

export default DetailPage;
