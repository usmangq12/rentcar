export interface IDropdown {
    id: string;
    label: string;
    selectedValue: string;
    data: string[];
}

export interface IDropdownModel {
    selectModel: IDropdown;
    onValueChange: Function
}

export class Dropdown implements IDropdown {
    id = "";
    label = "";
    selectedValue = "";
    data = [];
}