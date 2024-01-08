import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { placeType, placesData } from "../utils/data";
import Card from "./Card";

const SecondSection = () => {
  const [value, setValue] = useState(0);
  const [item, setItem] = useState<any>(placesData[0]);
  const renderItem = () => {
    const data = placesData.filter((d) => d.placesId === item?.id);
    return data
      .slice(0, 3)
      .map((d) => <Card key={d.id} card={d as placeType} />);
  };
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto", mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: 1,
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: { xs: "1.2rem", md: "2rem" }, fontWeight: "bold" }}
          >
            Popular Places
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: { xs: "100px", sm: "70%" },
          }}
        >
          <Tabs
            TabIndicatorProps={{
              style: { background: "#FFA41B" },
            }}
            value={value}
            onChange={(evt, value) => {
              console.log(value);

              setValue(value);
            }}
            scrollButtons
            variant="scrollable"
            sx={{
              ".Mui-selected": {
                fontWeight: "bold",
              },
              bgcolor: "info.main",
              borderRadius: 2,
            }}
          >
            {placesCategory.map((p) => {
              return (
                <Tab
                  key={p.id}
                  label={p.name}
                  onClick={() => {
                    setItem(p);
                    console.log(p);
                  }}
                  sx={{ fontSize: { xs: "0.7rem", sm: "1rem" } }}
                />
              );
            })}{" "}
            <Typography
              sx={{
                color: "success.main",
                fontWeight: "bold",
                fontSize: { xs: "0.7rem", sm: "1rem" },
                my: "auto",
              }}
            >
              | View all
            </Typography>
          </Tabs>{" "}
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 3,
          mx: "auto",
        }}
      >
        {renderItem()}
      </Box>
    </Box>
  );
};
export default SecondSection;

export const placesCategory = [
  { id: 1, name: "Beach" },
  { id: 2, name: "Mountain" },
  { id: 3, name: "WaterFall" },
  { id: 4, name: "IceBerg" },
];
