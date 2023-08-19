import { Button, CustomModal } from '@components';
import React from 'react';
import { ItemModalTypes } from './types';

export default function AdminItemModal({
  showItemModal,
  setShowItemModal,
  currentSelectedStatus,
}: ItemModalTypes) {
  return (
    <CustomModal isOpen={showItemModal} onClose={() => setShowItemModal(false)}>
      <div className="font-gilroy w-full h-full">
        <p className="text-center text-3xl font-bold mt-3 mb-10">
          Item Details:
        </p>
        <div className="flex flex-col w-full md:ml-5">
          <div className="flex md:flex-row flex-col">
            <img
              src={currentSelectedStatus?.fileSrc}
              alt="item"
              className="md:w-1/2 w-full h-96 object-cover"
              width={650}
              height={650}
            />
            <div className="flex flex-col md:w-1/2 w-full md:ml-5">
              <div>
                <p className="text-4xl md:mt-0 mt-5">
                  {currentSelectedStatus?.title}
                </p>
                <p className="text-gray500 mt-5 mb-5">
                  {currentSelectedStatus?.description}
                </p>
                <span className="flex md:justify-normal justify-center md:gap-6 gap-2 mt-2 mb-5">
                  <p className="rounded-full bg-red400 text-white p-2 md:text-sm text-xs">
                    Starting Bid: {currentSelectedStatus?.startingBid}$
                  </p>
                  <p className="rounded-full bg-red400 text-white p-2 md:text-sm text-xs">
                    Current Bid: {currentSelectedStatus?.currentBid}$
                  </p>
                </span>
              </div>
              <div className="flex gap-5 justify-center mt-10 mb-3">
                <Button
                  type="button"
                  //   onClick={onWithdrawClick}
                  //   disabled={withdrawLoading}
                  className="bg-black text-white lg:w-3/12 w-1/2 rounded p-2"
                >
                  {/* {withdrawLoading ? <Loader /> : 'Withdraw Bid'} */}
                </Button>
                <Button
                  type="button"
                  //   onClick={onBidClick}
                  //   disabled={withdrawLoading}
                  className="bg-red400 text-white lg:w-3/12 w-1/2 hover:bg-red500 rounded p-2"
                >
                  Make Bid
                </Button>
              </div>
              {/* About Seller */}
              <div className="flex justify-center mt-5">
                <Button
                  type="button"
                  className="bg-red400 text-white lg:w-3/12 w-1/2 hover:bg-red500 rounded p-2"
                  //   onClick={onSellerClick}
                >
                  About Seller
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}
