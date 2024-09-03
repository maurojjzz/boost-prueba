import { Box } from "@mui/material";
import WelcomeSection from "../welcomeSection/WelcomeSection.jsx";
import Navbar from "../navbar/Navbar.jsx";
import ServicesSection from "../servicesSection/ServicesSection.jsx";
import ImageBreakout from "./imageBreakout/ImageBreakout.jsx";
import Contact from "../contact/Contact.jsx";
import Map from "../map/Map.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
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
