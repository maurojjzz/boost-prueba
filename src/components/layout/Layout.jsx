import { Box, Typography } from "@mui/material";
import WelcomeSection from "../welcomeSection/WelcomeSection.jsx";
import Navbar from "../navbar/Navbar.jsx";

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

      <Box
        sx={{
          width: "100%",
          height: "200vh",
        }}
        id={"services"}
      >
        <Typography variant="body1" color="initial">
          other section
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
