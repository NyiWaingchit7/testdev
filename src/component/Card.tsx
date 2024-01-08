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
        width: { xs: "23%", sm: "28%" },

        m: 1,
        borderRadius: 3,
        bgcolor: "info.main",
        p: 1,
        boxShadow: 1,
      }}
    >
      <Box sx={{ width: "100%", mb: 2, height: { xs: "90px", md: "200px" } }}>
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
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "0.6rem", sm: "1rem" } }}
        >
          {card.name}
        </Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", color: "success.main" }}
        >
          <StarIcon sx={{ fontSize: { xs: "0.6rem", sm: "1rem" } }} />
          <Typography sx={{ fontSize: { xs: "0.5rem", sm: "1rem" } }}>
            {card.rating}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ color: "primary.main" }}>
        {" "}
        <Typography sx={{ fontSize: { xs: "0.5rem", sm: "0.8rem" } }}>
          <LocationOnIcon
            sx={{
              fontSize: { xs: "0.6rem", sm: "1rem" },
              alignSelf: "center",
            }}
          />{" "}
          {card.location}
        </Typography>
      </Box>
    </Box>
  );
};
export default Card;
