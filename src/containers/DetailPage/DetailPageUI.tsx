import React from 'react';
import { Button, Loader } from '@components';
import { DetailPageUIPropType } from './types';

function DetailPageUI({
  item,
  onBidClick,
  onWithdrawClick,
  withdrawLoading,
  onSellerClick,
  canDeleteItem,
  onDeleteClick,
  deleteLoading,
}: DetailPageUIPropType) {
  return (
    <div className="font-gilroy w-full h-full">
      <p className="text-center text-3xl font-bold mt-3 mb-10">
        Product Details
      </p>
      <div className="flex md:flex-row flex-col">
        <img
          src={item?.fileSrc}
          alt="item"
          className="md:w-1/2 w-full h-96 object-cover"
          width={650}
          height={650}
        />
        <div className="flex flex-col justify-normal sm:justify-between md:w-1/2 w-full md:ml-5">
          <div>
            <p className="text-4xl font-medium md:mt-0 mt-5">{item?.title}</p>
            <p className="text-black mt-5 mb-5 w-full h-48 md:h-40 overflow-y-auto">
              {item?.description}
            </p>
            <div className="flex flex-row justify-center">
              <span className="flex md:justify-normal justify-center md:gap-6 gap-2 mt-2 mb-5">
                <p className="rounded-xl bg-red400 text-white p-2 md:text-base">
                  Current Bid: <strong> {item?.currentBid}$ </strong>
                </p>
                <p className="rounded-xl bg-red400 text-white p-2 md:text-base">
                  Starting Bid: <strong> {item?.startingBid}$ </strong>
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row rounded-lg gap-5 justify-center mt-4 mb-3">
            {/* Withdraw Bid Button */}
            <Button
              type="button"
              onClick={onWithdrawClick}
              disabled={withdrawLoading}
              className="bg-red400 text-white lg:w-3/12 md:w-1/2 w-full hover:bg-red500 rounded p-2"
            >
              {withdrawLoading ? <Loader /> : 'Withdraw Bid'}
            </Button>
            {/* Make Bid Button */}
            <Button
              type="button"
              onClick={onBidClick}
              disabled={withdrawLoading}
              className="bg-red400 text-white lg:w-3/12 md:w-1/2 w-full hover:bg-red500 rounded p-2"
            >
              Make Bid
            </Button>
            {/* About Seller */}
            <Button
              type="button"
              className="bg-red400 text-white lg:w-3/12 md:w-1/2 w-full hover:bg-red500 rounded p-2"
              onClick={onSellerClick}
            >
              About Seller
            </Button>
            {canDeleteItem && (
              <Button
                type="button"
                className="bg-black text-white lg:w-3/12 w-1/2 hover:bg-red500 rounded p-2"
                onClick={onDeleteClick}
              >
                {deleteLoading ? <Loader /> : 'Delete Item'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPageUI;
