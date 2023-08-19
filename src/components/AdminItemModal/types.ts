import { TeamsDataType } from 'containers/types';

export type ItemModalTypes = {
  showItemModal: boolean;
  setShowItemModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentSelectedStatus: TeamsDataType | null;
};
