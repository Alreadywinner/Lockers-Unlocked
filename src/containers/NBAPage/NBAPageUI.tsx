import { Button, Card } from '@components';
import { TeamsDataType } from '@types';
import React from 'react';
import { Link } from 'react-router-dom';

type NBATeamsProps = {
  NBATeamsData: TeamsDataType[] | null | false;
  handleItemPress: (item: TeamsDataType) => void;
};

function NBAPageUI({ NBATeamsData, handleItemPress }: NBATeamsProps) {
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
        NBA Teams Items
      </h1>
      <div className="mt-14 mb-5 ml-2 mr-2 flex gap-5 flex-wrap justify-center">
        {NBATeamsData && NBATeamsData.length > 0 ? (
          NBATeamsData.map((element) => {
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

export default NBAPageUI;
