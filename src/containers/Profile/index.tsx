import { ScrollToTop, SidePanel, StatusList } from '@components';
import { useLocalStorageDataContext } from '@context';
import { TeamsDataType } from 'containers/types';
import React, { useEffect, useRef, useState } from 'react';

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
  const { AllCurrentUserLiveItems, AllCurrentUserSoldItems, localStorageData } =
    useLocalStorageDataContext();
  const [selectedStatusList, setSelectedStatusList] = useState<
    TeamsDataType[] | null | false
  >();
  const personalInfo = useRef<typeof localStorageData>();

  useEffect(() => {
    if (selectedItem === 1) {
      personalInfo.current = null;
      setSelectedStatusList(AllCurrentUserLiveItems);
    } else if (selectedItem === 2) {
      personalInfo.current = null;
      setSelectedStatusList(AllCurrentUserSoldItems);
    } else if (selectedItem === 3) {
      setSelectedStatusList(null);
      personalInfo.current = localStorageData;
    }
  }, [selectedItem]);
  const updateStatus = (key: number) => {
    if (key !== selectedItem) {
      setSelectedItem(key);
    }
  };
  return (
    <div className="font-gilroy p-0">
      <ScrollToTop />
      <div className="flex md:flex-row flex-col gap-1 mt-0">
        <div className="md:w-1/5 w-100 bg-white-500 shadow-lg shadow-white-500/50 rounded h-full">
          <SidePanel
            sidePanelItems={sidePanelItems}
            updateStatus={updateStatus}
            selectedItem={selectedItem}
          />
        </div>

        <div className="md:w-4/5 w-100 overflow-auto">
          <StatusList
            listItems={selectedStatusList}
            personalInfo={personalInfo.current}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
