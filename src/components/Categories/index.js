import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import { Box, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
const Categories = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.categorymain}>
        <Box className={classes.connect}>
          <Typography variant="h6">58 Available connects</Typography>
        </Box>

        <Box className={classes.avaiabilitybox}>
          <Typography variant="h5" className={classes.badge}>
            Availability Badge{" "}
            <IconButton className={classes.categoryicons}>
              <CreateIcon className={classes.createicons} />
            </IconButton>
          </Typography>
          <Typography className={classes.badge}> Available now off</Typography>
          <Typography variant="h5" className={classes.badge}>
            {" "}
            Hours per week{" "}
            <IconButton className={classes.categoryicons}>
              <CreateIcon className={classes.createicons} />
            </IconButton>{" "}
          </Typography>
          <Typography> More than 30 hrs/week</Typography>
          <Typography variant="h5" className={classes.badge}>
            Profile Visibility Public
          </Typography>
        </Box>
        <Box className={classes.categoriesbox}>
          <Box className={classes.categorytext}>
            <Typography variant="h5"> My Categories</Typography>
            <IconButton className={classes.categoryicons}>
              <CreateIcon className={classes.createicons} />
            </IconButton>
          </Box>
          <br></br>
          <Box className={classes.linksbox}>
            <Link to="/MobileDevelopment" className={classes.categorylinks}>
              <Typography className={classes.categorylinkstext}>
                MobileDevelopment{" "}
              </Typography>
            </Link>

            <Link to="/Ecommerce" className={classes.categorylinks}>
              <Typography className={classes.categorylinkstext}>
                Ecommerce{" "}
              </Typography>
            </Link>
            <Link to="/Accounting" className={classes.categorylinks}>
              <Typography className={classes.categorylinkstext}>
                Accounting{" "}
              </Typography>
            </Link>
            <Link to="/QATesting" className={classes.categorylinks}>
              <Typography className={classes.categorylinkstext}>
                QATesting{" "}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Categories;
