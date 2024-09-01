import { Box, Typography, useTheme } from "@mui/material";
const ServicesSection = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          pt: "80px",
          border: "1px solid red",
        }}
        id={"services"}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "HelveticaNowDisplay",
            width: { sm: "75%" },
            maxWidth: "940px",
            textAlign: "start",
            ml: "15px",
            fontSize: {
              xs: "55px",
              sm: "80px",
            },
          }}
        >
          Impulsa tu Aventura con Nuestro Servicio Automotriz de Primera
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            fontFamily: "HelveticaNowDisplay",
            color: theme.palette.black.main,
            textAlign: "start",
            ml: "15px",
            mt: "35px",
            fontSize: "18px",
            width:  "90%" ,
            maxWidth: "600px",
          }}
        >
          En BOOST CAR, transformamos cada trayecto en una experiencia excepcional. Descubre nuestros servicios
          automotrices de primera calidad, diseñados para llevarte a tu destino con seguridad y estilo.
        </Typography>
        <Box>

        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
