import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Paper, Typography } from "@material-ui/core";

import { useStyles } from "./style";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DrawerComponent from "../DrawerComponent";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HelpIcon from "@material-ui/icons/Help";
import AirplanemodeActiveRoundedIcon from "@material-ui/icons/AirplanemodeActiveRounded";

import InputBase from "@material-ui/core/InputBase";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import ClickAway from "../ClickAway";

const Navbar = () => {
  const classes = useStyles();
  const match = useMediaQuery("(max-width: 1280px)");

  const [openDrawer, setopenDrawer] = useState(false);
  const handleDrawerOpen = () => {
    setopenDrawer(true);
  };

  const handleDrawerClose = () => {
    setopenDrawer(false);
  };

  const [none, setNone] = useState(false);
  const handleEnter = () => {
    setNone(true);
  };
  const handleLeave = () => {
    setNone(false);
  };
  return (
    <>
      <Box>
        <Box className={classes.root}>
          <Box className={classes.leftnav}>
            <Link to="/" className={classes.upwork}>
              <Typography variant="h6" className={classes.logo}>
                Upwork
              </Typography>
            </Link>

            <Paper className={classes.search_container}>
              <SearchIcon className={classes.search_icon} />

              <ArrowDropDownIcon />

              <InputBase
                className={classes.input}
                placeholder="Search "
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              ></IconButton>
            </Paper>
          </Box>
          <Box display="flex" alignItems="center" className={classes.menubar}>
            {match ? (
              <Box className={classes.menubarone}>
                <IconButton onClick={handleDrawerOpen}>
                  <MenuIcon className={classes.a} />
                </IconButton>
              </Box>
            ) : (
              <Box className={classes.list}>
                <Typography>Find Work</Typography>
                <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                  <Typography>My Jobs</Typography>
                  {none ? (
                    <div className={classes.dropdown}>
                      <li className={classes.dropdownlist}>
                        {" "}
                        <a className={classes.dropdownlista}> My Jobs</a>
                      </li>
                      <li className={classes.dropdownlist}>
                        {" "}
                        <a className={classes.dropdownlista}>All contracts</a>
                      </li>
                      <li className={classes.dropdownlist}>
                        <a className={classes.dropdownlista}> Work Diary</a>{" "}
                      </li>
                    </div>
                  ) : null}
                </div>
                <Typography>Reports</Typography>
                <Typography>Messages</Typography>
              </Box>
            )}
            <Box className={classes.account_icons_container}>
              <IconButton className={classes.accounts_icon}>
                <HelpIcon />
              </IconButton>
              <IconButton className={classes.accounts_icon}>
                <NotificationsIcon />
              </IconButton>

              <IconButton className={classes.accounts_icon}>
                <AirplanemodeActiveRoundedIcon />
              </IconButton>
              <Box>
                <ClickAway />
              </Box>
            </Box>
          </Box>
        </Box>
        <DrawerComponent
          style={{ marginTop: "30px" }}
          openDrawer={openDrawer}
          handleDrawerClose={handleDrawerClose}
        />
      </Box>
    </>
  );
};
export default Navbar;
