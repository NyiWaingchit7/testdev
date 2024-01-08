import { Box, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const FifthSection = () => {
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
        <Typography
          sx={{ fontSize: { xs: "1.2rem", md: "2rem" }, fontWeight: "bold" }}
        >
          Our Gallery
          <Typography
            sx={{
              fontSize: { xs: "0.6rem", md: "0.8rem" },
              fontWeight: "bold",
              display: "inline",
            }}
          >
            Share your happy moment
          </Typography>
        </Typography>
        <Typography
          sx={{
            color: "success.main",
            fontWeight: "bold",
            fontSize: { xs: "0.6rem", md: "0.8rem" },
          }}
        >
          View all
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: "0 4px",
          maxWidth: "900px",
          mx: "auto",
          maxHeight: { xs: "320px", md: "610px" },
          flexDirection: "column",
          mt: 3,
        }}
      >
        {data.map((d) => {
          return (
            <Box sx={{ width: "32%" }} key={d.id}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: d.xsHeight, md: d.mdHeight },
                  objectFit: "cover",
                  borderRadius: 2,
                }}
                component="img"
                src={d.img}
              />
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          mt: 7,
        }}
      >
        {agencies.map((d) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "10%",
              }}
              key={d.id}
            >
              <Typography
                sx={{
                  fontWeight: "bold",

                  color: "info.dark",
                }}
              >
                {d.icon}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.6rem", sm: "1.5rem" },
                  color: "info.dark",
                }}
              >
                {d.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default FifthSection;
export const data = [
  {
    id: 1,
    img: "g1.jpg",
    mdHeight: "300px", //I know it shouldn't be but I try the best to be same as sample
    xsHeight: "200px",
  },
  {
    id: 2,
    img: "g2.jpg",
    mdHeight: "150px",
    xsHeight: "100px",
  },
  {
    id: 3,
    img: "g3.jpg",
    mdHeight: "150px",
    xsHeight: "100px",
  },
  {
    id: 4,

    mdHeight: "300px",
    xsHeight: "200px",
    img: "g4.jpg",
  },
  {
    id: 5,

    mdHeight: "300px",
    xsHeight: "200px",
    img: "g5.jpg",
  },
  {
    id: 6,

    mdHeight: "150px",
    xsHeight: "100px",
    img: "g6.jpg",
  },
];
export const agencies = [
  {
    id: 1,
    name: "Ikema",
    icon: (
      <TravelExploreIcon sx={{ fontSize: { xs: "0.6rem", sm: "1.7rem" } }} />
    ),
  },
  {
    id: 2,
    name: "Niana",
    icon: (
      <TravelExploreIcon sx={{ fontSize: { xs: "0.6rem", sm: "1.7rem" } }} />
    ),
  },
  {
    id: 3,
    name: "Ruan",
    icon: (
      <TravelExploreIcon sx={{ fontSize: { xs: "0.6rem", sm: "1.7rem" } }} />
    ),
  },
  {
    id: 4,
    name: "Gurrero",
    icon: (
      <TravelExploreIcon sx={{ fontSize: { xs: "0.6rem", sm: "1.7rem" } }} />
    ),
  },
  {
    id: 5,
    name: "Jose",
    icon: (
      <TravelExploreIcon sx={{ fontSize: { xs: "0.6rem", sm: "1.7rem" } }} />
    ),
  },
];
