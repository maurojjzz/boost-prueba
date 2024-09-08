import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();

  const styleLink = {
    fontFamily: "HelveticaNowDisplay",
    cursor: "pointer",
    color: theme.palette.primary.main,
    lineHeight: 1.8,
    mb: 1,
    fontWeight: "bold",
    letterSpacing: 1.5,
    "&:hover": {
      textDecoration: "underline",
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.black.main,
        color: theme.palette.primary.main,
        padding: "40px 20px",
        mt: "100px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          mb: { xs: 3, md: 0 },
          flex: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.primary.main,
            fontFamily: "Unison-Pro-Bold",
            fontSize: "22px",
            lineHeight: "100%",
            height: "40px",
            alignItems: "center",
          }}
        >
          Boost Car
        </Typography>
        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.8,
            fontFamily: "HelveticaNowDisplay",
          }}
        >
          Cordoba 551, Rosario, Argentina
          <br />
          +54 234 567 890
          <br />
          boostcar@email.com
        </Typography>
      </Box>

      <Box
        sx={{
          mb: { xs: 3, md: 0 },
          flex: 1,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Navegación
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Link to="/#home">
            <Typography variant={"body1"} sx={styleLink}>
              Inicio
            </Typography>
          </Link>
          <Link to="/products">
            <Typography variant={"body1"} sx={styleLink}>
              Catalogo
            </Typography>
          </Link>
          <Link to="/#services">
            <Typography variant={"body1"} sx={styleLink}>
              Servicios
            </Typography>
          </Link>
          <Link to="/#contact">
            <Typography variant={"body1"} sx={styleLink}>
              Contacto
            </Typography>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Síguenos
        </Typography>
        <Box>
          <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#fff" }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#fff" }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: "#fff" }}>
            <Twitter />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "#fff" }}>
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 3, md: 4 },
          width: "100%",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} BoostCar. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
