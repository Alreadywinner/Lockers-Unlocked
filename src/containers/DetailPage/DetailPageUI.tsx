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
            <div className="flex flex-row items-center gap-4 p-2 font-bold">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon icon-package size-8 fill-none stroke-black stroke-2"
                viewBox="0 0 64 64"
              >
                <path
                  className="cls-1"
                  d="M32 56L9.05 42.88V22.12L32 9l22.95 13.12v20.76L32 56z"
                />
                <path
                  className="cls-1"
                  d="M32 56V35.23l22.95-13.11M32 35.23L9.05 22.12M42.13 14.79L20.52 28.67v8.75"
                />
              </svg>
              <span>Fast Shipping</span>
            </div>
            <div className="flex flex-row items-center gap-4 p-2 mb-2 font-bold">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                className="icon icon-lock size-8 fill-none stroke-black stroke-2"
                viewBox="0 0 64 64"
              >
                <path
                  id="svg_2"
                  data-name="svg 2"
                  className="cls-1"
                  d="M20.48 24v-3c0-6.6 5.52-11 11.76-11C39 10 44 15.13 44 21v3"
                />
                <path
                  id="svg_4"
                  data-name="svg 4"
                  className="cls-1"
                  d="M11.62 24h41.25v29.77H11.62z"
                />
                <path className="cls-1" d="M32.24 37v7" />
                <circle className="cls-1" cx="32.24" cy="35.5" r="1.5" />
              </svg>
              <span>Secure Payments</span>
            </div>
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
