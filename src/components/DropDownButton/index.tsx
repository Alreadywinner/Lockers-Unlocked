import { Loader } from '@components';
import React from 'react';
import { DropDownButtonPropType } from './types';

export default function DropDownButton({
  statusLoading,
  showDropDown,
  setShowDropDown,
  handleStatusSelect,
}: DropDownButtonPropType) {
  return <div>Hello</div>;
}

/* <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setShowDropDown(!showDropDown)}
          disabled={statusLoading}
        >
          {statusLoading ? <Loader color="#000" /> : 'Update Status'}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {showDropDown && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <ul>
              <li
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray500 hover:cursor-pointer hover:text-white"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
                onClick={() =>
                  handleStatusSelect('sold', currentSelectedStatus?.id || '')
                }
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handleStatusSelect('sold', currentSelectedStatus?.id || '');
                  }
                }}
              >
                Sold
              </li>
              <li
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray500 hover:cursor-pointer hover:text-white"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
                onClick={() =>
                  handleStatusSelect('live', currentSelectedStatus?.id || '')
                }
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handleStatusSelect('live', currentSelectedStatus?.id || '');
                  }
                }}
              >
                Live
              </li>
            </ul>
          </div>
        </div>
      )}
    </div> */
