import React from 'react';
import { Card, ProfileCard } from '@components';
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
            <div>
              <svg
                className="h-24 w-24 ml-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-7m-9 0l2.794 3.36A2 2 0 0 0 7 10h10a2 2 0 0 0 1.206-.64L20 4m0 0H9m0 0l2.794 3.36A2 2 0 0 0 11 10h3"
                />
              </svg>
              <p className="text-center mt-3 font-extrabold text-xl">
                No Items Found
              </p>
            </div>
          )}
        </div>
      ) : (
        <div>
          {personalInfo && (
            <div className="h-screen">
              <ProfileCard personalInfo={personalInfo} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default StatusList;

/* <div className="h-screen flex justify-center gap-5">
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
                <p className="md:text-3xl text-2xl text-start md:mt-0 mt-6 font-bold text-center">
                  Profile Image
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
                <span className="w-1/2 h-1/2">
                  &nbsp;&nbsp;&nbsp;
                  <img
                    src={`${personalInfo.fileSrc}`}
                    alt="profile-img"
                    className="w-1/2 h-1/2"
                  />
                </span>
              </div>
            </div> */
