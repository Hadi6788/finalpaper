import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 50px 0px 50px",
    },
  },
  leftContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    padding: "0px 20px 0px 50px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0px",
      order: 2,
    },
  },
  rightContainer: {
    width: "20%",
    paddingRight: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "10px",
      paddingRight: "0px",
      order: 1,
    },
  },
  searchContainer: {
    marginTop: "40px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  searchicon: {
    background: "green",
    borderRadius: "0px",
  },
  inputbase: {
    paddingLeft: "20px",
  },
}));
