import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import WelcomeSection from "../welcomeSection/WelcomeSection.jsx";
import Navbar from "../navbar/Navbar.jsx";
import ServicesSection from "../servicesSection/ServicesSection.jsx";
import ImageBreakout from "./imageBreakout/ImageBreakout.jsx";
import Contact from "../contact/Contact.jsx";
import Map from "../map/Map.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <WelcomeSection />

      <Navbar />

      <ServicesSection />

      <ImageBreakout />

      <Contact />

      <Map />

      <Footer />
    </Box>
  );
};

export default Layout;
