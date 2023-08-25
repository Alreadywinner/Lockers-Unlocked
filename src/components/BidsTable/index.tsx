import React from 'react';
import { BidsTablePropTypes } from './types';

export default function BidsTable({ bidsData }: BidsTablePropTypes) {
  return (
    <div className="flex flex-col gap-5 items-center mt-10 mb-3">
      <p className="text-4xl md:mt-0 mt-5">Bidders</p>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Bid
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bidsData &&
                    bidsData.map((item) => (
                      <tr
                        className="border-b dark:border-neutral-500"
                        key={item?.id}
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item?.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item?.bid}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item?.email}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
