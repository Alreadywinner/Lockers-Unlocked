import { Button, Card } from '@components';
import { TeamsDataType } from '@types';
import React from 'react';

type CollegeTeamsProps = {
  collegeTeamsData: TeamsDataType[] | null | false;
  handleItemPress: (item: TeamsDataType) => void;
  handleAddNewClick: () => void;
};

function CollegeTeamsUI({
  collegeTeamsData,
  handleItemPress,
  handleAddNewClick,
}: CollegeTeamsProps) {
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
        College Teams Items
      </h1>
      <div className="mt-14 mb-5 ml-2 mr-2 flex gap-5 flex-wrap justify-center">
        {collegeTeamsData && collegeTeamsData.length > 0 ? (
          collegeTeamsData.map((element) => {
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
          <div className="h-screen">
            <p className="md:text-3xl text-2xl md:mt-0 mt-6 font-bold text-center">
              No Items Found Please Add New
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CollegeTeamsUI;
