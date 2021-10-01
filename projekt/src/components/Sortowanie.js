import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    label: "alive",
  },
  {
    label: "dead",
  },
  {
    label: "unknow",
  },
];

function Sortowanie() {
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Wybierz "
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
export default Sortowanie;
