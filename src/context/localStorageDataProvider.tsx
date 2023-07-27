// LocalStorageDataProvider.tsx
import React, { useState, useMemo } from 'react';
import { TeamsDataType } from 'containers/types';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'firebase';
import {
  LocalStorageDataContext,
  LocalStorageDataContextType,
  LocalStorageDataType,
} from './localStorageDataContext';

type LocalStorageDataProviderProps = {
  children: React.ReactNode;
};

export default function LocalStorageDataProvider({
  children,
}: LocalStorageDataProviderProps) {
  const [localStorageData, setLocalStorageDataState] =
    useState<LocalStorageDataType | null>(null);

  const [allItems, setAllItems] = useState<Array<TeamsDataType> | null>(null);

  const AllNFLItems = useMemo(() => {
    return (
      allItems &&
      allItems.length > 0 &&
      allItems?.filter((item) => item.teamSelect === 'NFL' && item)
    );
  }, [allItems]);

  const AllNBAItems = useMemo(() => {
    return (
      allItems &&
      allItems.length > 0 &&
      allItems?.filter((item) => item.teamSelect === 'NBA' && item)
    );
  }, [allItems]);

  const AllMLBItems = useMemo(() => {
    return (
      allItems &&
      allItems.length > 0 &&
      allItems?.filter((item) => item.teamSelect === 'MLB' && item)
    );
  }, [allItems]);

  const AllCollegeItems = useMemo(() => {
    return (
      allItems &&
      allItems.length > 0 &&
      allItems?.filter((item) => item.teamSelect === 'College Teams' && item)
    );
  }, [allItems]);

  const AllCurrentUserSoldItems = useMemo(() => {
    return allItems?.filter(
      (item) =>
        item.status === 'sold' &&
        item.bids.some((bid) => bid.id === localStorageData?.id),
    );
  }, [allItems]);

  const AllCurrentUserLiveItems = useMemo(() => {
    return allItems?.filter(
      (item) =>
        item.status === 'live' &&
        item.bids.some((bid) => bid.id === localStorageData?.id),
    );
  }, [allItems]);

  const fetchAllItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'items'));
      const items: TeamsDataType[] = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as TeamsDataType),
      );
      setAllItems(items);
    } catch (err) {
      // Handle error here
    }
  };

  const setLocalStorageData = (data: LocalStorageDataType) => {
    setLocalStorageDataState(data);
  };

  const removeLocalStorageData = () => {
    setLocalStorageDataState(null);
  };

  const contextValue = useMemo<LocalStorageDataContextType>(
    () => ({
      localStorageData,
      setLocalStorageData,
      removeLocalStorageData,
      fetchAllItems,
      AllNFLItems,
      AllNBAItems,
      AllMLBItems,
      AllCollegeItems,
      AllCurrentUserSoldItems,
      AllCurrentUserLiveItems,
    }),
    [
      localStorageData,
      setLocalStorageData,
      removeLocalStorageData,
      fetchAllItems,
      AllNFLItems,
      AllNBAItems,
      AllMLBItems,
      AllCollegeItems,
      AllCurrentUserSoldItems,
      AllCurrentUserLiveItems,
    ],
  );

  return (
    <LocalStorageDataContext.Provider value={contextValue}>
      {children}
    </LocalStorageDataContext.Provider>
  );
}
