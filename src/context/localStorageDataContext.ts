// LocalStorageDataContext.tsx
import { TeamsDataType } from 'containers/types';
import { createContext, useContext } from 'react';

export type LocalStorageDataType = {
  email: string;
  id: string;
  userType: string;
  name: string;
  fileSrc?: string;
};

export type LocalStorageDataContextType = {
  localStorageData: LocalStorageDataType | null;
  setLocalStorageData: (data: LocalStorageDataType) => void;
  removeLocalStorageData: () => void;
  fetchAllItems: () => void;
  AllNFLItems: TeamsDataType[] | null | false;
  AllNBAItems: TeamsDataType[] | null | false;
  AllMLBItems: TeamsDataType[] | null | false;
  AllCollegeItems: TeamsDataType[] | null | false;
  AllCurrentUserSoldItems?: TeamsDataType[] | null | false;
  AllCurrentUserLiveItems?: TeamsDataType[] | null | false;
  AllLiveItems?: TeamsDataType[] | null | false;
  AllSoldItems?: TeamsDataType[] | null | false;
  loading: boolean;
};

const LocalStorageDataContext =
  createContext<LocalStorageDataContextType | null>(null);

function useLocalStorageDataContext() {
  const context = useContext(LocalStorageDataContext);
  if (!context) {
    throw new Error(
      'useLocalStorageDataContext must be used within a LocalStorageDataProvider',
    );
  }
  return context;
}

export { LocalStorageDataContext, useLocalStorageDataContext };
