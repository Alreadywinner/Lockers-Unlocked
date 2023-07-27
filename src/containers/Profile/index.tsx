import { SidePanel, StatusList } from '@components';
import { useLocalStorageDataContext } from '@context';
import { TeamsDataType } from 'containers/types';
import React, { useEffect, useState } from 'react';

function Profile() {
  const sidePanelItems = [
    {
      name: 'Live Items',
      key: 1,
    },
    {
      name: 'Sold Items',
      key: 2,
    },
    {
      name: 'Personal Info',
      key: 3,
    },
  ];
  const [selectedItem, setSelectedItem] = useState(1);
  const { AllCurrentUserLiveItems, AllCurrentUserSoldItems } =
    useLocalStorageDataContext();
  const [selectedStatusList, setSelectedStatusList] = useState<
    TeamsDataType[] | null | false
  >();

  useEffect(() => {
    if (selectedItem === 1) {
      setSelectedStatusList(AllCurrentUserLiveItems);
    } else if (selectedItem === 2) {
      setSelectedStatusList(AllCurrentUserSoldItems);
    }
  }, [selectedItem]);
  const updateStatus = (key: number) => {
    if (key !== selectedItem) {
      setSelectedItem(key);
    }
  };
  return (
    <div className="font-gilroy p-4">
      <div className="flex md:flex-row flex-col gap-4 mt-10">
        <div className="md:w-1/5 w-100 bg-white-500 shadow-lg shadow-white-500/50 rounded h-full">
          <SidePanel
            sidePanelItems={sidePanelItems}
            updateStatus={updateStatus}
            selectedItem={selectedItem}
          />
        </div>
        <div className="md:w-4/5 w-100">
          <StatusList listItems={selectedStatusList} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
