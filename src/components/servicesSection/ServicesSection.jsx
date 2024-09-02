import { Box, Typography, useTheme } from "@mui/material";
import CardComponent from "../card/Card.jsx";
const ServicesSection = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
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
            width: "90%",
            maxWidth: "600px",
          }}
        >
          En BOOST CAR, transformamos cada trayecto en una experiencia excepcional. Descubre nuestros servicios
          automotrices de primera calidad, diseñados para llevarte a tu destino con seguridad y estilo.
        </Typography>
        <Box>
          <CardComponent
            title={"Venta de Vehículos"}
            text={"Amplia selección de autos nuevos y de segunda mano, con opciones de financiamiento personalizadas."}
            img={"car-dealership.jpg"}
            imgAlt={"woman mechanic"}
          />
          <CardComponent
            title={"Mantenimiento General"}
            text={"Servicios de cambio de aceite, revisión de frenos, y chequeo general del vehículo."}
            img={"woman-mech.jpg"}
            imgAlt={"bunch of cars lined up"}
          />
          <CardComponent 
            title={"Conectividad y Electrónica Avanzada"} 
            text={"Instalación de sistemas de conectividad inteligente, como Apple CarPlay, Android Auto, y actualizaciones de software para vehículos."}  
            img={"tesla.jpg"}
            imgAlt={"tesla tablet"}
          />
          <CardComponent 
            title={"Conectividad y Electrónica Avanzada"} 
            text={"Instalación de sistemas de conectividad inteligente, como Apple CarPlay, Android Auto, y actualizaciones de software para vehículos."}  
            img={"tesla.jpg"}
            imgAlt={"tesla tablet"}
          />
          <CardComponent 
            title={"Taller Virtual Asistido"} 
            text={" Soporte técnico en tiempo real mediante videollamadas, donde expertos guían a los clientes en reparaciones sencillas desde casa."}  
            img={"mechanic-virtual.jpg"}
            imgAlt={"virtual mechanic"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
