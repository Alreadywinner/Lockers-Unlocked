import { ReactNode } from 'react';

export type CustomModalPropType = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
