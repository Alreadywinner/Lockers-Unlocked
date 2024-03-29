import React from 'react';
import { SidePanelPropsType } from './types';

function SidePanel({
  sidePanelItems,
  updateStatus,
  selectedItem,
}: SidePanelPropsType) {
  return (
    <div className="md:h-screen bg-white shadow-inner">
      <ul className="ml-5 mt-auto p-4 mr-5 flex flex-col gap-4">
        {sidePanelItems.map((element) => (
          <li key={element.key}>
            <div
              className={`${
                selectedItem === element.key &&
                'bg-red500 text-white rounded-md'
              } hover:bg-red400 cursor-pointer p-3 hover:text-white hover:rounded-md`}
              onClick={() => updateStatus(element.key)}
              onKeyDown={() => updateStatus(element.key)}
              tabIndex={0}
              role="button"
            >
              {element.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidePanel;
