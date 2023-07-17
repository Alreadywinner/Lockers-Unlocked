import { TeamsDataType } from '@containers/types';

export type DetailPageAllPropType = {
  detailModal: boolean;
  setDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: TeamsDataType | null;
  onBidClick: () => void;
  onWithdrawClick?: () => void;
};

export type DetailPagePropType = Omit<
  DetailPageAllPropType,
  'onBidClick' | 'onWithdrawClick'
>;
export type DetailPageUIPropType = Pick<
  DetailPageAllPropType,
  'onBidClick' | 'item' | 'onWithdrawClick'
>;
