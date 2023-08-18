import { TeamsDataType } from 'containers/types';
import { LocalStorageDataType } from 'context/localStorageDataContext';

export type StatusListPropType = {
  listItems?: Array<TeamsDataType> | null | false;
  personalInfo?: LocalStorageDataType | null;
};
