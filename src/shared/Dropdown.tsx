import React from "react";
import dropdownStyles from "../styles/Dropdown";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { IDropdown, IDropdownModel } from "../models/Dropdown";

export const DropdownComponent = (props: IDropdownModel) => {
  const classes = dropdownStyles();
  const { id, label, selectedValue, data }: IDropdown = props.selectModel;
  console.log("dropdown props: ", props)
  // Handle Mac Address change and set value to changed value
  const handleMacAddressChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.onValueChange(event.target.value as string);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={label + "id"}>{label}</InputLabel>
      <Select
        labelId={label}
        id={id}
        value={selectedValue}
        onChange={handleMacAddressChange}
      >
        {data.map((item: any, index: number) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownComponent;
