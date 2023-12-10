import { TeamsDataType } from '@containers/types';

export type DetailPageAllPropType = {
  detailModal: boolean;
  setDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: TeamsDataType | null;
  onBidClick: () => void;
  onWithdrawClick?: () => void;
  withdrawLoading: boolean;
  onSellerClick: () => void;
  onDeleteClick: () => void;
  canDeleteItem: boolean;
  deleteLoading: boolean;
};

export type DetailPagePropType = Omit<
  DetailPageAllPropType,
  | 'onBidClick'
  | 'onWithdrawClick'
  | 'withdrawLoading'
  | 'onSellerClick'
  | 'canDeleteItem'
  | 'onDeleteClick'
  | 'deleteLoading'
>;
export type DetailPageUIPropType = Pick<
  DetailPageAllPropType,
  | 'onBidClick'
  | 'item'
  | 'onWithdrawClick'
  | 'withdrawLoading'
  | 'onSellerClick'
  | 'canDeleteItem'
  | 'onDeleteClick'
  | 'deleteLoading'
>;
