import { Button, Card } from '@components';
import { TeamsDataType } from '@types';
import React from 'react';

type NFLTeamsProps = {
  NFLTeamsData: TeamsDataType[] | null | false;
  handleItemPress: (item: TeamsDataType) => void;
  handleAddNewClick: () => void;
};

function NFLPageUI({
  NFLTeamsData,
  handleItemPress,
  handleAddNewClick,
}: NFLTeamsProps) {
  // async function sendExpiredEmail(item: TeamsDataType) {
  //   const backendUrl = import.meta.env.VITE_BACKEND_URL;
  //   const buyerName = item.bids;
  //   try {
  //     const response = await fetch(`${backendUrl}/winner-email`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({}),
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.error.message || 'Unexpected Error occurred');
  //     }

  //     const responseData = await response.json();
  //     console.log(responseData.msg);
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //   }
  // }
  return (
    <div className="font-gilroy mt-8 flex flex-col">
      <div>
        <Button
          className="bg-red text-white p-3 rounded float-right hover:bg-red500 mr-3 md:mb-0 sm:mb-10"
          type="button"
          onClick={handleAddNewClick}
        >
          Add a New Item
        </Button>
      </div>
      <h1 className="md:text-4xl text-3xl md:mt-0 mt-6 font-bold text-center">
        NFL Teams Items
      </h1>
      <div className="mt-14 mb-5 ml-2 mr-2 flex gap-5 flex-wrap justify-center h-screen">
        {NFLTeamsData && NFLTeamsData.length > 0 ? (
          NFLTeamsData.map((element) => {
            return (
              <Card
                key={element.id}
                item={element}
                onClick={() => {
                  handleItemPress(element);
                }}
                // sendExpiredEmail={() => sendExpiredEmail(element)}
              />
            );
          })
        ) : (
          <div>
            <p className="md:text-3xl text-2xl md:mt-0 mt-6 font-bold text-center">
              No Items Found Please Add New
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NFLPageUI;
