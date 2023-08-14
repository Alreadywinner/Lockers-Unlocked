import { TeamsDataType } from 'containers/types';

export type SellerDetailPagePropType = {
  item: TeamsDataType | null;
  sellerModal: boolean;
  setSellerModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SellerDetailUIPropType = {
  user: {
    name: string;
    email: string;
    userType: string;
  };
};
