import { TeamsDataType } from '@containers/types';

export type DetailPageAllPropType = {
  detailModal: boolean;
  setDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: TeamsDataType | null;
  onBidClick: () => void;
  onWithdrawClick?: () => void;
  withdrawLoading: boolean;
};

export type DetailPagePropType = Omit<
  DetailPageAllPropType,
  'onBidClick' | 'onWithdrawClick' | 'withdrawLoading'
>;
export type DetailPageUIPropType = Pick<
  DetailPageAllPropType,
  'onBidClick' | 'item' | 'onWithdrawClick' | 'withdrawLoading'
>;
