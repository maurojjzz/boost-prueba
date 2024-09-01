import { Box } from "@mui/material";
import WelcomeSection from "../welcomeSection/WelcomeSection.jsx";
import Navbar from "../navbar/Navbar.jsx";
import ServicesSection from "../servicesSection/ServicesSection.jsx";

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

      
    </Box>
  );
};

export default Layout;
