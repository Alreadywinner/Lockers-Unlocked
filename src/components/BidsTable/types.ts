type BidObjectType = {
  id: string;
  name: string;
  bid: string;
  email: string;
};
export type BidsTablePropTypes = {
  bidsData: Array<BidObjectType | null>;
};
