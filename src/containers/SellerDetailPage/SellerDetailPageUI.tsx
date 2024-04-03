import React from 'react';
import { SellerDetailUIPropType } from './types';

export default function SellerDetailPageUI({ user }: SellerDetailUIPropType) {
  return (
    <div className="font-gilroy">
      <p className="text-center text-4xl font-bold mt-3 mb-10">About Seller</p>
      <div className="flex justify-center items-center gap-10 w-full mt-40">
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-2xl text-gray-900">Name</dt>
              <dd className="text-gray-700 text-2xl sm:col-span-2">
                {user.name}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-2xl text-gray-900">Type</dt>
              <dd className="text-gray-700 text-2xl sm:col-span-2">
                {user.userType}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
