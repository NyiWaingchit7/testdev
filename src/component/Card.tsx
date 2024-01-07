import { Box, Typography } from "@mui/material";
import { placeType } from "../utils/data";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
interface prop {
  card: placeType;
}

const Card = ({ card }: prop) => {
  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "28%", lg: "28%" },

        m: 1,
        borderRadius: 3,
        bgcolor: "info.main",
        p: 1,
      }}
    >
      <Box sx={{ width: "100%", mb: 2, height: { xs: "150px", md: "200px" } }}>
        <Box
          component="img"
          src={card.img}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 3,
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mx: 1,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>{card.name}</Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", color: "success.main" }}
        >
          <StarIcon />
          <Typography>{card.rating}</Typography>
        </Box>
      </Box>
      <Box sx={{ color: "primary.main" }}>
        {" "}
        <Typography sx={{ fontSize: "0.7rem", mx: 1 }}>
          <LocationOnIcon sx={{ fontSize: "0.9rem", alignSelf: "center" }} />{" "}
          {card.location}
        </Typography>
      </Box>
    </Box>
  );
};
export default Card;
