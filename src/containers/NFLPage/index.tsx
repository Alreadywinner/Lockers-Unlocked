import React, { useRef, useState } from 'react';
import { TeamsDataType } from '@types';
import { Toast } from '@components';
import { DetailPage } from '@containers';
import NFLPageUI from './NFLPageUI';

function NFLPage() {
  const NFLTeamsData = [
    {
      currentBid: '100',
      description: 'He wore this t-shirt in his farewell',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      startingBid: '50',
      title: 'Lebron James',
      id: 1,
    },
    {
      currentBid: '100',
      description: 'He wore this t-shirt in his farewell',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      startingBid: '50',
      title: 'Lebron James',
      id: 2,
    },
    {
      currentBid: '100',
      description: 'He wore this t-shirt in his farewell',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      startingBid: '50',
      title: 'Lebron James',
      id: 3,
    },
    {
      currentBid: '100',
      description: 'He wore this t-shirt in his farewell',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      startingBid: '50',
      title: 'Lebron James',
      id: 4,
    },
    {
      currentBid: '100',
      description: 'He wore this t-shirt in his farewell',
      imgSrc: 'https://flowbite.com/docs/images/blog/image-1.jpg',
      startingBid: '50',
      title: 'Lebron James',
      id: 5,
    },
  ];
  const [toast, setToast] = useState({
    visible: false,
    text: '',
  });
  const currentItemRef = useRef<TeamsDataType | null>(null);
  const [detailModal, setDetailModal] = useState(false);
  const handleItemPress = (item: TeamsDataType): void => {
    setDetailModal(!detailModal);
    currentItemRef.current = item;
  };
  return (
    <>
      {toast.visible && (
        <Toast
          text={toast.text}
          visible={toast.visible}
          setVisible={setToast}
        />
      )}
      {detailModal && (
        <DetailPage
          detailModal={detailModal}
          setDetailModal={setDetailModal}
          item={currentItemRef.current}
        />
      )}
      <NFLPageUI
        NFLTeamsData={NFLTeamsData}
        handleItemPress={handleItemPress}
      />
    </>
  );
}

export default NFLPage;
