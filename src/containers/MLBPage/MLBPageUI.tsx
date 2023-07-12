import { Button, Card } from '@components';
import { TeamsDataType } from '@types';
import React from 'react';
import { Link } from 'react-router-dom';

type MLBTeamsProps = {
  MLBTeamsData: TeamsDataType[];
  handleItemPress: (item: TeamsDataType) => void;
};

function MLBPageUI({ MLBTeamsData, handleItemPress }: MLBTeamsProps) {
  return (
    <div className="font-gilroy mt-8 flex flex-col">
      <div>
        <Link to="/add-new">
          <Button
            className="bg-red text-white p-3 rounded float-right hover:bg-red500 mr-3"
            type="button"
          >
            Add a New Item
          </Button>
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-center">MLB Teams Items</h1>
      <div className="mt-14 mb-5 flex gap-5 flex-wrap justify-center">
        {MLBTeamsData &&
          MLBTeamsData.length > 0 &&
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
          })}
      </div>
    </div>
  );
}

export default MLBPageUI;
