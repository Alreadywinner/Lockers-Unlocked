import { BidDataType, TeamsDataType } from '@containers/types';
import { FormEvent, RefObject } from 'react';

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
  currentBid?: BidDataType;
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

export type DetailPageUIPropType = {
  submitBid: (e: FormEvent<HTMLFormElement>) => void;
  newBidRef: RefObject<HTMLInputElement>;
  updateLoading: boolean;
  onBidClick: () => void;
  item: TeamsDataType | null;
  onWithdrawClick?: () => void;
  onSellerClick: () => void;
  canDeleteItem: boolean;
  onDeleteClick: () => void;
  deleteLoading: boolean;
  currentBid?: BidDataType;
  withdrawLoading: boolean;
};
