import { Button, Card } from '@components';
import { TeamsDataType } from '@types';
import React from 'react';

type MLBTeamsProps = {
  MLBTeamsData: TeamsDataType[] | null | false;
  handleItemPress: (item: TeamsDataType) => void;
  handleAddNewClick: () => void;
};

function MLBPageUI({
  MLBTeamsData,
  handleItemPress,
  handleAddNewClick,
}: MLBTeamsProps) {
  return (
    <div className="font-gilroy mt-8 flex flex-col">
      <div>
        <Button
          className="bg-red text-white p-3 rounded float-right hover:bg-red500 mr-3"
          type="button"
          onClick={handleAddNewClick}
        >
          Add a New Item
        </Button>
      </div>
      <h1 className="md:text-4xl text-3xl md:mt-0 mt-6 font-bold text-center">
        MLB Teams Items
      </h1>
      <div className="h-screen mt-14 mb-5 ml-2 mr-2 flex gap-5 flex-wrap justify-center">
        {MLBTeamsData && MLBTeamsData.length > 0 ? (
          MLBTeamsData.map((element) => {
            return (
              <Card
                key={element.id}
                item={element}
                onClick={() => {
                  handleItemPress(element);
                }}
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
    </div>
  );
}

export default MLBPageUI;
