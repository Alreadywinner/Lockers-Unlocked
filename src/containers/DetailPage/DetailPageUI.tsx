import React from 'react';
import { Button, Loader } from '@components';
import { LockIcon, PackageIcon } from '@Icon';
import { DetailPageUIPropType } from './types';

function DetailPageUI({
  item,
  onBidClick,
  onWithdrawClick,
  withdrawLoading,
  canDeleteItem,
  onDeleteClick,
  deleteLoading,
  submitBid,
  newBidRef,
  updateLoading,
  currentBid,
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
          className="md:w-1/2 w-full h-96 object-contain"
          width={650}
          height={650}
        />
        <div className="flex flex-col justify-normal sm:justify-between md:w-1/2 w-full md:ml-5">
          <div>
            <p className="text-4xl font-medium md:mt-0 mt-5">{item?.title}</p>
            <p className="text-black mt-5 mb-5 w-full h-48 md:h-40 overflow-y-auto">
              {item?.description}
            </p>
            <div className="flex flex-row items-center gap-0 p-0 font-black">
              <PackageIcon color="#000000" aria-hidden="true" />
              <span>Fast Shipping</span>
            </div>
            <div className="flex flex-row items-center gap-0 p-0 mb-2 font-black">
              <LockIcon color="#000000" aria-hidden="true" />
              <span>Secure Payments</span>
            </div>
            <div className="flex flex-row justify-center">
              <span className="flex md:justify-normal justify-center md:gap-6 gap-2 mt-2 mb-5">
                <p className="rounded-xl bg-red400 text-white p-2 md:text-base">
                  Current Bid: <strong> {currentBid?.bid}$ </strong>
                </p>
                <p className="rounded-xl bg-red400 text-white p-2 md:text-base">
                  Starting Bid: <strong> {item?.startingBid}$ </strong>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pb-2">
        <div className="bg-red400 p-4 text-white w-full rounded-lg flex flex-col md:items-center justify-between md:justify-center gap-2">
          <p className="text-xl">Seller Details</p>
          <p>
            <span className="mr-2">Name:</span> {item?.user.name}
          </p>
          <p>
            <span className="mr-4">Type:</span> Seller
          </p>
        </div>
        <div className="bg-red400 text-white w-full rounded-lg p-4 col-span-3">
          <form
            className="flex flex-col items-center justify-center w-full gap-4"
            onSubmit={submitBid}
          >
            <label htmlFor="starting_bid" className="text-xl">
              Update Current Bid
            </label>
            <input
              type="number"
              id="starting_bid"
              ref={newBidRef}
              placeholder="Enter Number"
              className="h-9 text-fullBlack border-solid border-2 border-red rounded pl-2 w-full"
              required
            />
            <button
              type="submit"
              className="bg-red500 text-white lg:w-3/12 md:w-1/2 w-full opacity-85 hover:opacity-100 rounded p-2"
              onClick={onBidClick}
              disabled={updateLoading}
            >
              {updateLoading ? <Loader /> : 'Update Bid'}
            </button>
            <Button
              type="button"
              onClick={onWithdrawClick}
              disabled={withdrawLoading}
              className="bg-red500 text-white lg:w-3/12 md:w-1/2 w-full opacity-85 hover:opacity-100 rounded p-2"
            >
              {withdrawLoading ? <Loader /> : 'Withdraw Bid'}
            </Button>
            {canDeleteItem && (
              <Button
                type="button"
                className="bg-red500 text-white lg:w-3/12 md:w-1/2 w-full opacity-85 hover:opacity-100 rounded p-2"
                onClick={onDeleteClick}
              >
                {deleteLoading ? <Loader /> : 'Delete Item'}
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default DetailPageUI;
