import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const useStyles = makeStyles({
  drawer: {
    width: "200px",
  },
  draw: {
    width: "100%",
  },
});

const DrawerComponent = ({ handleDrawerClose, openDrawer, setopenDrawer }) => {
  const classes = useStyles();
  const itemsList = [
    {
      text: "Find Work",
    },
    {
      text: "My Jobs",
    },

    {
      text: "Reports",
    },
    {
      text: "Messages",
    },
  ];
  return (
    <div>
      <MUIDrawer className={classes.drawer} anchor="right" open={openDrawer}>
        <List className={classes.draw}>
          <ChevronLeftIcon onClick={handleDrawerClose} />
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>

        <List className={classes.connectbtn}>
          <ListItem>
            <SettingsIcon />
            <Typography>Settings</Typography>
          </ListItem>
          <ListItem>
            <ExitToAppIcon />
            <Typography>LogOut</Typography>
          </ListItem>
        </List>
      </MUIDrawer>
    </div>
  );
};

export default DrawerComponent;
