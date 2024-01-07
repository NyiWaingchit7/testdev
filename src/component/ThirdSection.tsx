import { Box, Typography } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import WifiIcon from "@mui/icons-material/Wifi";

const ThirdSection = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", mt: 5 }}>
      {" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            width: { xs: "150px", sm: "200px", md: "300px" },
            height: { xs: "150px", sm: "200px", md: "300px" },
            mt: 5,
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
            src="../traveller.jpg"
          />
        </Box>
        <Box sx={{ width: "40%", mt: 3 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1.5rem",
                md: "2rem",
                fontWeight: "bold",
              },
            }}
          >
            Explore All Corner Of The World With Us
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.6rem", sm: "1rem" } }}>
            Travel is the movement of people between distant geographical
            locations.Travel teaches us about humanity respect for different
            points of view.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            {chip.map((d) => (
              <Box
                key={d.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "35%",
                  m: 1,
                }}
              >
                <Box
                  sx={{ bgcolor: "info.main", borderRadius: 1, p: 1, m: 0.5 }}
                >
                  {d.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "0.5rem", sm: "1rem" },
                    fontWeight: "bold",
                  }}
                >
                  {d.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ThirdSection;

export const chip = [
  {
    id: 1,
    name: "Flight",
    icon: (
      <FlightIcon
        sx={{ color: "success.main", fontSize: { xs: "0.7rem", md: "1.5rem" } }}
      />
    ),
  },
  {
    id: 2,
    name: "Hotel",
    icon: (
      <HotelIcon
        sx={{ color: "success.main", fontSize: { xs: "0.7rem", md: "1.5rem" } }}
      />
    ),
  },
  {
    id: 3,
    name: "Food",
    icon: (
      <FastfoodIcon
        sx={{ color: "success.main", fontSize: { xs: "0.7rem", md: "1.5rem" } }}
      />
    ),
  },
  {
    id: 4,
    name: "Wifi",
    icon: (
      <WifiIcon
        sx={{ color: "success.main", fontSize: { xs: "0.7rem", md: "1.5rem" } }}
      />
    ),
  },
];
