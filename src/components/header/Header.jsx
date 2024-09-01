import { Box, Typography, useTheme, Link } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        textAlign: "center",
        pt: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.primary.main,
            fontFamily: "Unison-Pro-Bold",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
            fontSize: {
              xs: "calc(1.3rem + 4vw)",
              sm: "calc(2rem + 4vw)",
            },
            lineHeight: "100%",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          Boost Car
        </Typography>
        <Box
          sx={{
            color: theme.palette.primary.main,
            fontFamily: "Helvetica",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            mt: "10px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "flex-end",
              gap: "5px",
              margin: 0,
              paddingRight: "2px",
              fontWeight: "600",

            }}
          >
            <li>
              <Link
                href="#home"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
