import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerComponent from "../drawer/Drawer.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        border: "1px solid black",
        width: "100%",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.black.main,
        zIndex: 1000,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.primary.main,
          fontFamily: "Unison-Pro-Bold",
          fontSize: "calc(.5rem + 2vw)",
          cursor: "pointer",
          lineHeight: "100%",
          height: "40px",
          display: "flex",
          alignItems: "center",
          ml: "10px",
        }}
      >
        Boost Car
      </Typography>
       <MenuIcon 
        sx={{
          color: theme.palette.primary.main,
          cursor: "pointer",
          mr: "10px",
        }}
        onClick={toggleDrawer(true)} 
      />
      <DrawerComponent open={open} toggleDrawer={toggleDrawer} />  
    </Box>
  );
};

export default Navbar;
