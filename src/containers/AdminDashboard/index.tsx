import {
  AdminItemModal,
  ScrollToTop,
  SidePanel,
  StatusList,
} from '@components';
import { useLocalStorageDataContext } from '@context';
import { TeamsDataType } from 'containers/types';
import React, { useEffect, useRef, useState } from 'react';

export default function AdminDashboard() {
  const sidePanelItems = [
    {
      name: 'All Live Items',
      key: 1,
    },
    {
      name: 'All Sold Items',
      key: 2,
    },
    {
      name: 'Personal Info',
      key: 3,
    },
  ];
  const [selectedItem, setSelectedItem] = useState(1);
  const { AllLiveItems, AllSoldItems, localStorageData } =
    useLocalStorageDataContext();
  const [selectedStatusList, setSelectedStatusList] = useState<
    TeamsDataType[] | null | false
  >();
  const [showItemModal, setShowItemModal] = useState(false);
  const [currentSelectedStatus, setCurrentSelectedStatus] =
    useState<TeamsDataType | null>(null);
  const personalInfo = useRef<typeof localStorageData>();

  useEffect(() => {
    if (selectedItem === 1) {
      personalInfo.current = null;
      setSelectedStatusList(AllLiveItems);
    } else if (selectedItem === 2) {
      personalInfo.current = null;
      setSelectedStatusList(AllSoldItems);
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
  const handleItemPress = (element: TeamsDataType) => {
    setCurrentSelectedStatus(element);
    setShowItemModal(!showItemModal);
  };
  return (
    <div className="font-gilroy p-4">
      {showItemModal && (
        <AdminItemModal
          showItemModal={showItemModal}
          setShowItemModal={setShowItemModal}
          currentSelectedStatus={currentSelectedStatus}
        />
      )}
      <ScrollToTop />
      <div className="flex md:flex-row flex-col gap-4 mt-10">
        <div className="md:w-1/5 w-100 bg-white-500 shadow-lg shadow-white-500/50 rounded h-full">
          <SidePanel
            sidePanelItems={sidePanelItems}
            updateStatus={updateStatus}
            selectedItem={selectedItem}
          />
        </div>

        <div className="md:w-4/5 w-100">
          <StatusList
            listItems={selectedStatusList}
            personalInfo={personalInfo.current}
            handleItemPress={handleItemPress}
          />
        </div>
      </div>
    </div>
  );
}
