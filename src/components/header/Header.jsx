import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

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
            fontFamily: "HelveticaNowDisplay",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            mt: "10px",
          }}
        >
          <List
            sx={{
              listStyle: "none",
              display: "flex",
              justifyContent: "flex-end",
              gap: "5px",
              margin: 0,
              paddingRight: "2px",
              fontWeight: "600",
            }}
          >
            <Link
              to="/#services"
            >
              <ListItem
                sx={{
                  color: theme.palette.primary.main,
                  p:0,
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",

                }}
              >
                Servicios
              </ListItem>
            </Link>

            <Link
              to="/products"
            >
              <ListItem
                sx={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  p:0,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Catalogo
              </ListItem>
            </Link>

            <Link
              to="/#contact"
            >
              <ListItem
                sx={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                  p:0,
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Contacto
              </ListItem>
            </Link>



           
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
