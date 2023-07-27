export type SidePanelPropsType = {
  sidePanelItems: Array<{ name: string; key: number }>;
  updateStatus: (key: number) => void;
  selectedItem: number;
};
