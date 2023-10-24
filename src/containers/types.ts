export type BidDataType = {
  id: string;
  bid: string;
};
export type UserDetailsType = {
  name: string;
  fileSrc: string;
};
export interface TeamsDataType {
  currentBid: string;
  description: string;
  fileSrc: string;
  startingBid: string;
  status: string;
  teamSelect: string;
  title: string;
  id: string;
  user_id: string;
  bids: Array<BidDataType>;
  user: UserDetailsType;
}
