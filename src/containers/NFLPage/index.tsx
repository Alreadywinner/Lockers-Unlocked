import React, { useRef, useState } from 'react';
import { TeamsDataType } from '@types';
import { Toast } from '@components';
import { DetailPage } from '@containers';
import { useLocalStorageDataContext } from '@context';
import { useNavigate } from 'react-router-dom';
import NFLPageUI from './NFLPageUI';

function NFLPage() {
  const navigate = useNavigate();
  const { AllNFLItems: NFLTeamsData, localStorageData } =
    useLocalStorageDataContext();
  const [toast, setToast] = useState({
    visible: false,
    text: '',
  });
  const currentItemRef = useRef<TeamsDataType | null>(null);
  const [detailModal, setDetailModal] = useState(false);
  const handleItemPress = (item: TeamsDataType): void => {
    if (localStorageData && localStorageData?.id !== '') {
      setDetailModal(!detailModal);
      currentItemRef.current = item;
    } else {
      setToast({
        text: 'Please Login to continue',
        visible: true,
      });
    }
  };
  const handleAddNewClick = (): void => {
    if (
      localStorageData &&
      localStorageData.id !== '' &&
      localStorageData.userType === 'seller'
    ) {
      navigate('/add-new');
    } else {
      setToast({
        text: 'Please Login to continue or register yourself as seller',
        visible: true,
      });
    }
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
        handleAddNewClick={handleAddNewClick}
      />
    </>
  );
}

export default NFLPage;
