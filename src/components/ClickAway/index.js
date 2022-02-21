import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import profilepic from "../../Assets/Images/profilepic.jpg";
import Avatar from "@material-ui/core/Avatar";
import { Button, Typography } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "200px",
  },
  dropdown: {
    position: "absolute",
    paddingRight: "100px",
    top: 38,
    right: 10,
    left: 0,
    zIndex: 1,
    border: "1px solid grey",

    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  buttons: {
    display: "flex",
  },
  button1: {
    background: "green",
    color: "#fff",
    fontSize: "11px",
    "&:hover": {
      background: "#14a800",
    },
  },
  button2: {
    background: "#fff",
    color: "#000",
    marginLeft: "4px",
    fontSize: "11px",
    "&:hover": {
      background: "#14a800",
    },
  },
  title: {
    display: "flex",
    marginTop: "10px",
  },
  titletextheading: {
    fontSize: "14px",
    color: "green",
  },
  titletext: {
    fontSize: "13px",
  },
  picture: {
    marginRight: "12px",
  },
  iconpic: {
    marginRight: "16px",
    marginLeft: "10px",
  },
}));

export default function ClickAway() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <Avatar src={profilepic} onClick={handleClick} />
        {open ? (
          <Paper variant="outlined">
            <div className={classes.dropdown}>
              <div className={classes.buttons}>
                <Button className={classes.button1}>online</Button>
                <Button variant="outlined" className={classes.button2}>
                  {" "}
                  invisible
                </Button>
              </div>
              <div className={classes.title}>
                <Avatar src={profilepic} className={classes.picture} />
                <div>
                  <Typography className={classes.titletextheading}>
                    Sheeraz
                  </Typography>
                  <Typography className={classes.titletext}>
                    Freelancer
                  </Typography>
                </div>
              </div>

              <div className={classes.title}>
                <SettingsIcon className={classes.iconpic} />
                <Typography>Settings</Typography>
              </div>
              <div className={classes.title}>
                <ExitToAppIcon className={classes.iconpic} />
                <Typography>LogOut</Typography>
              </div>
            </div>
          </Paper>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
