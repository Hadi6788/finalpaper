import WelcomeBanner from "../../components/WelcomeBanner";
import { Box, Paper } from "@material-ui/core";
import { useStyles } from "./style";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import LikedJobs from "../../components/Likedjobs";
import Profile from "../../components/Profile";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainContainer}>
        <Box className={classes.leftContainer}>
          <WelcomeBanner />
          <Paper className={classes.searchContainer}>
            <InputBase
              className={classes.inputbase}
              placeholder="Search for Job "
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton className={classes.searchicon}>
              <SearchIcon />
            </IconButton>
          </Paper>
          <LikedJobs />
        </Box>
        <Box className={classes.rightContainer}>
          <Profile />
        </Box>
      </Box>
    </>
  );
};

export default Home;
