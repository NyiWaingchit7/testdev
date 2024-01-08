import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { placeType, placesData } from "../utils/data";
import Card from "./Card";
import { placesCategory } from "./SecondSection";

const FourthSection = () => {
  const [value, setValue] = useState(0);
  const [item, setItem] = useState<any>(placesData[0]);
  const renderItem = () => {
    const data = placesData.filter((d) => d.placesId === item?.id);
    return data.map((d) => <Card key={d.id} card={d as placeType} />);
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
            Explore Places
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
                color: "success.main",
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
        }}
      >
        {data.map((d) => (
          <Box
            sx={{
              width: { xs: "20%", md: "15%" },
              bgcolor: "info.main",
              m: 1,
              height: { xs: "80px", sm: "150px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography
              sx={{
                color: "success.main",
                fontSize: { xs: "0.9rem", sm: "1.5rem" },
                fontWeight: "bold",
              }}
            >
              {d.stats}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "0.6rem", sm: "1rem" },
              }}
            >
              {d.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default FourthSection;

export const data = [
  { id: 1, name: "Cities", stats: "24+" },
  { id: 1, name: "Place", stats: "700+" },
  { id: 1, name: "Hotel", stats: "200+" },
  { id: 1, name: "Review", stats: "2k+" },
];
