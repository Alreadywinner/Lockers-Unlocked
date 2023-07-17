import React from 'react';
import { CustomModal } from '@components';
import { DetailPagePropType } from './types';
import DetailPageUI from './DetailPageUI';

function DetailPage({ detailModal, setDetailModal, item }: DetailPagePropType) {
  return (
    <CustomModal isOpen={detailModal} onClose={() => setDetailModal(false)}>
      <DetailPageUI
        item={item}
        onBidClick={() => {}}
        onWithdrawClick={() => {}}
      />
    </CustomModal>
  );
}

export default DetailPage;
