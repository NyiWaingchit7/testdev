import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import SelectItem from "./SelectItem";
import SearchIcon from "@mui/icons-material/Search";

const FirstSection = () => {
  return (
    <Box sx={{ mt: 3, maxWidth: "1100px", mx: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ width: "25%", mt: 3 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "3rem",
                md: "4rem",
                fontWeight: "bold",
              },
            }}
          >
            Explore Beautiful World
          </Typography>
        </Box>{" "}
        <Box
          sx={{
            width: { xs: "150px", sm: "200px", md: "300px" },
            height: { xs: "150px", sm: "200px", md: "300px" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
            component="img"
            src="../first.jpg"
          />
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          ml: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            mt: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {selectItem.map((s) => (
            <Box key={s.id} sx={{ width: { xs: "26%", sm: "25%" } }}>
              <SelectItem item={s} />
            </Box>
          ))}
          <Box sx={{ my: "auto", height: "40px" }}>
            <Button
              variant="contained"
              sx={{ display: { xs: "none", sm: "block" }, mx: 2 }}
            >
              Search
            </Button>{" "}
            <Button sx={{ display: { xs: "block", sm: "none" } }}>
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default FirstSection;

export const selectItem = [
  { id: 1, name: "Located in", value: ["Myanmar", "Thailand", "Japan"] },
  { id: 2, name: "Date", value: ["2-3-2024", "15-5-2024", "4-6-2024"] },
  {
    id: 3,
    name: "Price Range",
    value: ["$500-$700", "$400-$600", "$700-$900"],
  },
];
