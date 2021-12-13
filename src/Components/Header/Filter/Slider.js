import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { carsContext } from "../../../contexts/CarsContext";
import history from "../../../helpers/history";

function valuetext(value) {
  return `${value} $`;
}
export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 25000]);

  const { getCars } = React.useContext(carsContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const search = new URLSearchParams(history.location.search);
    search.set("price_gte", newValue[0]);
    search.set("price_lte", newValue[1]);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getCars(search.toString());
  };

  return (
    <Box sx={{ width: 220 }}>
      <Slider
        color="error"
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max="25000"
      />
    </Box>
  );
}
