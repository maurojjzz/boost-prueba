import { Box } from "@mui/material";
import Header from "../header/Header.jsx";
import ButtonMore from "../welcomeSection/buttonMore/ButtonMore";

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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          alignItems: "flex-end", 
          justifyContent: "center",
          mb: "100px",
        }}
      >
        <ButtonMore />
      </Box>
    </Box>
  );
};

export default WelcomeSection;
