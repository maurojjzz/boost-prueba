import { Drawer, List, ListItem, ListItemText, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const DrawerComponent = ({ open, toggleDrawer }) => {
  const theme = useTheme();

  const styleLink = {
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    textAlign: "center",
  };

  const moreSubtleDesign = {
    width: "100%",
    textDecoration: "none",
    color: theme.palette.black.main,
  };

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      <List
        sx={{
          width: "250px",
        }}
      >
        <ListItem sx={styleLink} button onClick={toggleDrawer(false)}>
          <Link to="/#home" style={moreSubtleDesign}>
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem sx={styleLink} button onClick={toggleDrawer(false)}>
          <Link to="/#services" style={moreSubtleDesign}>
            <ListItemText primary="Servicios" />
          </Link>
        </ListItem>
        <ListItem sx={styleLink} button onClick={toggleDrawer(false)}>
          <Link to="/products" style={moreSubtleDesign}>
            <ListItemText primary="Catalogo" />
          </Link>
        </ListItem>
        <ListItem sx={styleLink} button onClick={toggleDrawer(false)}>
          <Link to="/#contact" style={moreSubtleDesign}>
            <ListItemText primary="Contacto" />
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
