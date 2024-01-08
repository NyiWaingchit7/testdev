import { Box, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { agencies, imgGrid } from "../utils/data2";

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
              mx: 1,
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
        {imgGrid.map((d) => {
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
                <TravelExploreIcon
                  sx={{ fontSize: { xs: "0.6rem", sm: "1.7rem" } }}
                />
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
