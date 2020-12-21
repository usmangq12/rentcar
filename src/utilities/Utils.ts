import { cities } from '../config/Constants';
import { IDropdown } from '../models/Dropdown';

export const getCititesDropdownData = (dropdown: IDropdown) => {
    dropdown.id = 'citiesDropdownId';
    dropdown.label = 'Select City';
    dropdown.selectedValue = cities[0];
    dropdown.data = cities;
    console.log("dropdown: ", dropdown);
    return dropdown;
}