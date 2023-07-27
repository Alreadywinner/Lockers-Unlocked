import React, { useState, useRef } from 'react';
import { TeamsDataType } from '@types';
import { Toast } from '@components';
import { DetailPage } from '@containers';
import { useLocalStorageDataContext } from '@context';
import MLBPageUI from './MLBPageUI';

function MLBPage() {
  const { AllMLBItems: MLBTeamsData } = useLocalStorageDataContext();
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
      <MLBPageUI
        MLBTeamsData={MLBTeamsData}
        handleItemPress={handleItemPress}
      />
    </>
  );
}

export default MLBPage;
