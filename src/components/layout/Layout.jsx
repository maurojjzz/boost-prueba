import { Box, Typography } from "@mui/material";
import WelcomeSection from "../welcomeSection/WelcomeSection.jsx";

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

      <Box
        sx={{
          width: "100%",
          height: "100px",
        }}
      >
        <Typography variant="body1" color="initial">pther section</Typography>
      </Box>

    </Box>
  );
};

export default Layout;
