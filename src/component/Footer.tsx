import { Box, Button, TextField, Typography } from "@mui/material";
import { topbar } from "./TopBar";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { qLinks } from "../utils/data2";

const Footer = () => {
  return (
    <Box sx={{ maxWidth: "1300px", mx: "auto", mt: 5 }}>
      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "1rem", md: "1.7rem" }, fontWeight: "bold" }}
        >
          Sign up to our newsletter
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            mt: 3,
            boxShadow: 1,
            p: 2,
            borderRadius: 3,
          }}
        >
          <TextField
            placeholder="Enter your email here"
            fullWidth
            size="small"
          />
          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "900px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          mt: 5,
          flexDirection: { xs: "column", sm: "row" },
          mx: "auto",
          p: 1,
        }}
      >
        <Box sx={{ width: { xs: "75%", sm: "35%" } }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.8rem", sm: "1.1rem" },
              mb: 2,
            }}
          >
            Quick Link
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            {qLinks.map((d) => (
              <Box sx={{ my: 1 }} key={d.id}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.7rem", sm: "1rem" },
                    color: "info.dark",
                    cursor: "pointer",
                  }}
                >
                  {d.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "75%", sm: "35%" },
            display: { xs: "none", sm: "block" },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.8rem", sm: "1.1rem" },
              mb: 2,
            }}
          >
            Quick Link
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            {topbar.map((d, index) => (
              <Box sx={{ my: 1 }} key={index}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.7rem", sm: "1rem" },
                    color: "info.dark",
                    cursor: "pointer",
                  }}
                >
                  {d}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ width: { xs: "75%", sm: "35%" }, mt: { xs: 3, sm: 0 } }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.8rem", sm: "1.1rem" },
              mb: 2,
            }}
          >
            Contact us
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            {contact.map((d) => (
              <Box
                sx={{
                  my: 1,
                  display: "flex",
                  alignItems: "flex-start",
                  width: "100%",
                }}
                key={d.id}
              >
                {d.icon}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "0.7rem", sm: "1rem" },
                    color: "info.dark",
                    mx: 1,
                  }}
                >
                  {d.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 6 }}>
        <Box
          sx={{
            maxWidth: "1300px",
            mx: "auto",
            height: "3px",
            bgcolor: "info.dark",
            boxShadow: 1,
          }}
        ></Box>
        <Typography
          sx={{
            mt: 2,
            maxWidth: { xs: "250px", sm: "400px" },
            mx: "auto",
            fontSize: { xs: "0.6rem", sm: "1rem" },
          }}
        >
          Copyright @{" "}
          <Typography
            sx={{
              display: "inline",
              color: "success.main",
              fontSize: { xs: "0.6rem", sm: "1rem" },
            }}
          >
            niana232@gmail.com
          </Typography>{" "}
          by Ikema Ruan
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;

export const contact = [
  {
    id: 1,
    text: "Annawar Road,Parami Quater,Myeik,Myanmar",
    icon: (
      <AddLocationIcon
        sx={{ fontSize: { xs: "1rem", sm: "1.5rem" }, color: "success.main" }}
      />
    ),
  },
  {
    id: 2,
    text: "09424627268",
    icon: (
      <LocalPhoneIcon
        sx={{ fontSize: { xs: "1rem", sm: "1.5rem" }, color: "success.main" }}
      />
    ),
  },
  {
    id: 3,
    text: "nyiwaingchit5@gmail.com",
    icon: (
      <EmailIcon
        sx={{ fontSize: { xs: "1rem", sm: "1.5rem" }, color: "success.main" }}
      />
    ),
  },
];
