import { BidDataType } from 'containers/types';

const EvaluateHighestBid = (array: BidDataType[]) => {
  const highestBid = array.reduce((prev, current) => {
    const prevBid = parseInt(prev.bid, 10);
    const currentBid = parseInt(current.bid, 10);
    return prevBid > currentBid ? prev : current;
  }, array[0]);

  return highestBid;
};

export default EvaluateHighestBid;
