import React from 'react';
import { SellerDetailUIPropType } from './types';

export default function SellerDetailPageUI({ user }: SellerDetailUIPropType) {
  return (
    <div className="font-gilroy">
      <p className="text-center text-4xl font-bold mt-3 mb-10">About Seller</p>
      <div className="flex justify-center items-center gap-10 w-full mt-40">
        <div className="flex flex-col text-center gap-5">
          <p className="text-2xl font-bold md:mt-0 mt-5">Name:</p>
          <p className=" text-2xl mb-5 font-bold">Type:</p>
        </div>
        <div className="flex flex-col text-center gap-5">
          <p className="text-gray500 text-2xl font-bold md:mt-0 mt-5">
            {user.name}
          </p>
          <p className="text-gray500 text-2xl mb-5 font-bold">
            {user.userType}
          </p>
        </div>
      </div>
    </div>
  );
}
