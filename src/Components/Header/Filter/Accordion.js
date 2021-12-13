import React, { useContext, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style/Accordion.css";
import { carsContext } from "../../../contexts/CarsContext";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import history from "../../../helpers/history";
import RangeSlider from "./Slider";

export default function SimpleAccordion() {
  // Фильтрация

  const { getCars } = useContext(carsContext);
  const [country, setCountry] = useState(getCountry());
  const [brand, setBrand] = useState(getBrand());

  function getCountry() {
    const search = new URLSearchParams(history.location.search);
    return search.get("country");
  }

  function handleChangeCountry(e) {
    if (e.target.value === "all") {
      history.push(`${history.location.pathname.replace("country")}`);
      getCars();
      return;
    }
    let search = new URLSearchParams(history.location.search);
    search.set("country", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getCars(search.toString());
    setCountry(e.target.value);
  }

  function getBrand() {
    const search = new URLSearchParams(history.location.search);
    return search.get("brand");
  }

  function handleChangeBrand(e) {
    if (e.target.value === "all") {
      history.push(`${history.location.pathname.replace("brand")}`);
      getCars();
      return;
    }
    let search = new URLSearchParams(history.location.search);
    search.set("brand", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getCars(search.toString());
    setBrand(e.target.value);
  }

  /////////  Поиск //////////
  const [searchValue, setSearchValue] = useState("");

  function handleValue(e) {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setSearchValue(e.target.value);
    getCars(search.toString());
  }

  return (
    <div className="accordion">
      <label className="lab">Поиск</label>
      <input
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={handleValue}
        style={{
          width: "100%",
          boxSizing: "border-box",
          border: "2px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          backgroundColor: "white",
          padding: "2%",
          margin: "5% 0",
        }}
      />
      <label className="lab">Фильтр</label>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ width: "250px" }}>
            <RadioGroup
              value={country}
              onChange={handleChangeCountry}
              aria-label="country"
              name="country"
              sx={{ ml: 2, mt: 1 }}
            >
              <FormControlLabel
                value="Европа"
                control={<Radio />}
                label="Европа"
              />
            </RadioGroup>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <RadioGroup
              value={brand}
              onChange={handleChangeBrand}
              aria-label="brand"
              name="brand"
              sx={{ ml: 3, mt: 1 }}
            >
              <FormControlLabel
                value="Polestar"
                control={<Radio />}
                label="Polestar"
              />
              <FormControlLabel
                value="Tesla"
                control={<Radio />}
                label="Tesla"
              />
            </RadioGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ width: "250px" }}>
            <RadioGroup
              value={country}
              onChange={handleChangeCountry}
              aria-label="country"
              name="country"
              sx={{ ml: 2, mt: 1 }}
            >
              <FormControlLabel
                value="Китай"
                control={<Radio />}
                label="Китай"
              />
            </RadioGroup>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <RadioGroup
              value={brand}
              onChange={handleChangeBrand}
              aria-label="brand"
              name="brand"
              sx={{ ml: 3, mt: 1 }}
            >
              <FormControlLabel value="Jac" control={<Radio />} label="Jac" />
              <FormControlLabel value="Baic" control={<Radio />} label="Baic" />
              <FormControlLabel value="Jac" control={<Radio />} label="Jac" />
            </RadioGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ width: "250px" }}>
            <RadioGroup
              value={country}
              onChange={handleChangeCountry}
              aria-label="country"
              name="country"
              sx={{ ml: 2, mt: 1 }}
            >
              <FormControlLabel
                value="Япония"
                control={<Radio />}
                label="Япония"
              />
            </RadioGroup>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <RadioGroup
              value={brand}
              onChange={handleChangeBrand}
              aria-label="brand"
              name="brand"
              sx={{ ml: 3, mt: 1 }}
            >
              <FormControlLabel
                value="Nissan"
                control={<Radio />}
                label="Nissan"
              />
              <FormControlLabel
                value="Subaru"
                control={<Radio />}
                label="Subaru"
              />
            </RadioGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary>
          <RadioGroup
            value={country}
            onChange={handleChangeCountry}
            aria-label="country"
            name="country1"
            sx={{ ml: 2, mt: 1 }}
          >
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="Все авто"
            />
          </RadioGroup>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <FormControl sx={{ ml: 2 }}>
          <FormLabel>По ценам</FormLabel>
          <RangeSlider />
        </FormControl>
      </Accordion>
    </div>
  );
}
