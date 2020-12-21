import React, { useState } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Appbar from "./components/Appbar";
import DropdownComponent from "./shared/Dropdown";
import { Dropdown, IDropdown } from "./models/Dropdown";
import { getCititesDropdownData } from "./utilities/Utils";

function App() {
  const [citiesDropdown] = useState<IDropdown>(() =>
    getCititesDropdownData(new Dropdown())
  );

  const handleCitiesDropdownChange = (value: string) => {
    console.log({ value });
  };

  return (
    <Grid container
    spacing={3}
        style={{
          width: "100%",
          margin: 0,
          display: "flex",
          paddingTop: 50,
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 20
        }}>
      <Appbar title="Rentcar" />

      <Grid
        item xs={12} sm={12} md={12} lg={4} xl={4}
        style={{ display: "flex", flexWrap: "wrap" }}
        spacing={3}
      >
        {citiesDropdown.data && citiesDropdown.data.length && (
          <DropdownComponent
            selectModel={citiesDropdown}
            onValueChange={(value: string) => handleCitiesDropdownChange(value)}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default App;
