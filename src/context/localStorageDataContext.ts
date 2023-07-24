// LocalStorageDataContext.tsx
import React, { createContext, useContext } from 'react';

export type LocalStorageDataType = {
  email: string;
  id: string;
};

export type LocalStorageDataContextType = {
  localStorageData: LocalStorageDataType | null;
  setLocalStorageData: (data: LocalStorageDataType) => void;
  removeLocalStorageData: () => void;
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
