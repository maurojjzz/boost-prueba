import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const DrawerComponent = ({ open, toggleDrawer }) => {
  const styleLink = {
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
    textAlign: "center",
};

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
     
    >
      <List
        sx={{
          width: "250px",
        }}
      >
        <ListItem sx={styleLink} button onClick={toggleDrawer(false)}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem sx={styleLink} button onClick={toggleDrawer(false)}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem sx={styleLink} button onClick={toggleDrawer(false)}>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem sx={styleLink} button onClick={toggleDrawer(false)}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
