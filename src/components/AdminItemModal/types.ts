import { TeamsDataType, BidDataType } from 'containers/types';

export type ItemModalTypes = {
  showItemModal: boolean;
  setShowItemModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentSelectedStatus: TeamsDataType | null;
};

export interface UserBidsArrayType extends BidDataType {
  name: string;
  email: string;
}
