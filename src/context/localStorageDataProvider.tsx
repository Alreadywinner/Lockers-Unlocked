// LocalStorageDataProvider.tsx
import React, { useState, useMemo } from 'react';
import { TeamsDataType, UserDetailsType } from 'containers/types';
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
  const [loading, setLoading] = useState(false);

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

  const AllLiveItems = useMemo(() => {
    return allItems?.filter((item) => item.status === 'live');
  }, [allItems]);

  const AllSoldItems = useMemo(() => {
    return allItems?.filter((item) => item.status === 'sold');
  }, [allItems]);

  async function fetchUserDetails(user_id: string): Promise<UserDetailsType> {
    const querySnapshot = await getDocs(collection(db, 'users'));

    const userDoc = querySnapshot.docs.find((doc) => doc.id === user_id);

    if (userDoc) {
      return {
        name: userDoc.data().name,
        fileSrc: userDoc.data().fileSrc,
        email: userDoc.data().email,
      };
    }

    // If no matching document is found, return default values
    return {
      name: '',
      fileSrc: '',
      email: '',
    };
  }

  const fetchAllItems = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'items'));

      const itemPromises = querySnapshot.docs.map(async (doc) => {
        const teamData = { id: doc.id, ...doc.data() } as TeamsDataType;
        teamData.user = await fetchUserDetails(teamData.user_id);
        return teamData;
      });

      const items = await Promise.all(itemPromises);

      setAllItems(items);
    } catch (err) {
      // Handle error here
    } finally {
      setLoading(false);
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
      AllLiveItems,
      AllSoldItems,
      loading,
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
      AllLiveItems,
      AllSoldItems,
      loading,
    ],
  );

  return (
    <LocalStorageDataContext.Provider value={contextValue}>
      {children}
    </LocalStorageDataContext.Provider>
  );
}
