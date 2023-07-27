import React, { useRef, useState } from 'react';
import { TeamsDataType } from '@types';
import { Toast } from '@components';
import { DetailPage } from '@containers';
import { useLocalStorageDataContext } from '@context';
import NFLPageUI from './NFLPageUI';

function NFLPage() {
  const { AllNFLItems: NFLTeamsData } = useLocalStorageDataContext();
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
