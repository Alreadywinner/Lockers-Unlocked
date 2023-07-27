import React from 'react';
import { SidePanelPropsType } from './types';

function SidePanel({
  sidePanelItems,
  updateStatus,
  selectedItem,
}: SidePanelPropsType) {
  return (
    <div className="h-screen">
      <ul className="ml-5 mt-20 mr-5 flex flex-col gap-8">
        {sidePanelItems.map((element) => (
          <li key={element.key}>
            <div
              className={`${
                selectedItem === element.key &&
                'bg-red500 text-white rounded-md'
              } md:hover:bg-red400 cursor-pointer p-3 md:hover:text-white md:hover:rounded-md`}
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
