import React from 'react';
import { Card } from '@components';
import { StatusListPropType } from './types';

function StatusList({ listItems }: StatusListPropType) {
  return (
    <div className="mt-14 mb-5 ml-2 mr-2 flex gap-5 flex-wrap justify-center">
      {listItems && listItems.length > 0 ? (
        listItems.map((element) => {
          return (
            <Card
              key={element.id}
              item={element}
              onClick={() => {
                // handleItemPress(element);
              }}
            />
          );
        })
      ) : (
        <div className="h-screen">
          <p className="md:text-3xl text-2xl md:mt-0 mt-6 font-bold text-center">
            No Items Found Please Add New
          </p>
        </div>
      )}
    </div>
  );
}

export default StatusList;
