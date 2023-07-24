// LocalStorageDataProvider.tsx
import React, { useState, useMemo } from 'react';
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
    }),
    [localStorageData, setLocalStorageData, removeLocalStorageData],
  );

  return (
    <LocalStorageDataContext.Provider value={contextValue}>
      {children}
    </LocalStorageDataContext.Provider>
  );
}
