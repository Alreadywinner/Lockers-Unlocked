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
            {/* <p className="md:text-3xl text-2xl md:mt-0 mt-6 font-bold text-center">
              No Items Found Please Add New
            </p> */}
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=ais"
              alt="No Items Found"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default MLBPageUI;
