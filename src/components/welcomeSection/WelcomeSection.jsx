import { Box } from "@mui/material";
import Header from "../header/Header.jsx";

const WelcomeSection = () => {
  return (
    <Box
      id={"home"}
      sx={{
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: {
          xs: "url('/assets/images/welcome-mobile.jpg')",
          md: "url('/assets/images/welcome-desktop.jpg')",
        },
      }}
    >
      <Header />
    </Box>
  );
};

export default WelcomeSection;
