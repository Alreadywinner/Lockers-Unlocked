interface AuctionItems {
  imgSrc: string;
  title: string;
  description: string;
  currentBid: string;
  startingBid: string;
}
export type CardProps = {
  item: AuctionItems;
};
