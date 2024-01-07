import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

const SelectItem = ({ item }: any) => {
  const [value, setValue] = useState(item.value[0]);

  return (
    <Box sx={{ m: 1, width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{ fontWeight: "bold", fontSize: "1rem" }}
        >
          {item.name}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value || ""}
          label={item.name}
          onChange={(e) => setValue(e.target.value)}
        >
          {item.value.map((v: any, index: number) => (
            <MenuItem key={index} value={v}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.5rem", md: "1rem" },
                }}
              >
                {v}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default SelectItem;
