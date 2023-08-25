export type DropDownButtonPropType = {
  statusLoading: boolean;
  showDropDown: boolean;
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  handleStatusSelect: () => void;
};
