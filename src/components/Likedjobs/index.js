import { Paper } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import TabPanel from "../Tabs";
import { useStyles } from "./style";
const LikedJobs = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={6} className={classes.likedmain}>
        <Box className={classes.likedtext}>
          <Typography variant="h6">Jobs you might like</Typography>
        </Box>
        <Box>
          <TabPanel />
        </Box>
      </Paper>
    </>
  );
};

export default LikedJobs;
