import React from 'react';
import { Card } from '@components';
import { StatusListPropType } from './types';

function StatusList({
  listItems,
  personalInfo,
  handleItemPress,
}: StatusListPropType) {
  return (
    <div className="mt-14 mb-5 ml-2 mr-2">
      {!personalInfo ? (
        <div className="flex gap-5 flex-wrap justify-center">
          {listItems && listItems.length > 0 ? (
            listItems.map((element) => {
              return (
                <Card
                  key={element.id}
                  item={element}
                  onClick={() => handleItemPress && handleItemPress(element)}
                />
              );
            })
          ) : (
            <p className="h-screen md:text-3xl text-2xl md:mt-0 mt-6 font-bold text-center">
              No Items Found Please Add New
            </p>
          )}
        </div>
      ) : (
        <div>
          {personalInfo && (
            <div className="h-screen flex justify-center gap-5">
              <div className="flex flex-col gap-5">
                <p className="md:text-3xl text-start text-2xl md:mt-0 mt-6 font-bold text-center">
                  Name
                </p>
                <p className="md:text-3xl text-start text-2xl md:mt-0 mt-6 font-bold text-center">
                  Email
                </p>
                <p className="md:text-3xl text-2xl text-start md:mt-0 mt-6 font-bold text-center">
                  User Type
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="md:text-3xl text-2xl text-start md:mt-0 mt-6 font-bold text-center">
                  :&nbsp;&nbsp;&nbsp;{personalInfo.name}
                </p>
                <p className="md:text-3xl text-2xl text-start md:mt-0 mt-6 font-bold text-center">
                  :&nbsp;&nbsp;&nbsp;{personalInfo.email}
                </p>
                <p className="md:text-3xl text-2xl text-start md:mt-0 mt-6 font-bold text-center">
                  :&nbsp;&nbsp;&nbsp;{personalInfo.userType}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StatusList;
