import { Button, Card } from '@components';
import { TeamsDataType } from '@types';
import React from 'react';
import { Link } from 'react-router-dom';

type D1TeamsProps = {
  D1TeamsData: TeamsDataType[];
  handleItemPress: (item: TeamsDataType) => void;
};

function D1SportsPageUI({ D1TeamsData, handleItemPress }: D1TeamsProps) {
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
      <h1 className="md:text-4xl text-3xl md:mt-0 mt-6 font-bold text-center">
        D1 Sports Items
      </h1>
      <div className="mt-14 mb-5 ml-2 mr-2 flex gap-5 flex-wrap justify-center">
        {D1TeamsData &&
          D1TeamsData.length > 0 &&
          D1TeamsData.map((element) => {
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

export default D1SportsPageUI;
