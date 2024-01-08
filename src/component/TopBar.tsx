import { Box, Button, Drawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const TopBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        maxWidth: "1300px",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          height: "80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "80px",
            }}
          >
            <Box component="img" sx={{ width: "100%" }} src="logo.png" />
          </Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", sm: "1.3rem" },
            }}
          >
            Touro
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {topbar.map((d, index) => (
              <Box key={index + 1} sx={{ m: 2, p: 1 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    "&:hover": {
                      borderBottom: 3,
                      borderColor: "success.main",
                    },
                    cursor: "pointer",
                  }}
                >
                  {d}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: { xs: "80%", md: "18%" },
            p: 1,
          }}
        >
          <Box
            sx={{ m: 1, display: { sx: "block", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </Box>
          <Button
            sx={{
              px: { sx: 1, md: 4 },
              width: { xs: "50px", md: "120px" },
              color: "info.light",
              fontSize: { xs: "0.5rem", md: "0.8rem" },
              display: { xs: "none", md: "block" },
            }}
            variant="contained"
            color="success"
          >
            Log in
          </Button>
        </Box>
        <Box>
          <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
            <Button
              sx={{
                mt: 3,
                px: 1,

                fontSize: "0.7rem",
                width: "10%",
                mx: 1,
              }}
              onClick={() => setOpen(false)}
              size="small"
            >
              <CloseIcon sx={{ fontSize: "1.5rem" }} />
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",

                flexDirection: "column",
                mt: 2,
                mx: 3,
              }}
            >
              {topbar.map((d, index) => (
                <Box key={index + 1} sx={{ m: 2, p: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      "&:hover": {
                        borderBottom: 3,
                        borderColor: "success.main",
                      },
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    {d}
                  </Typography>
                </Box>
              ))}{" "}
              <Button
                sx={{
                  px: 1,
                  color: "info.light",
                  fontSize: "0.7rem",
                  mx: "auto",
                }}
                variant="contained"
                color="success"
              >
                Log in
              </Button>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
};
export default TopBar;

export const topbar = ["Home", "Category", "Blog", "About us"];
