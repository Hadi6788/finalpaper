import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  categorymain: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "10px 0px",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },

  categoriesbox: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 30px",

    // textAlign: "center",
  },
  categorytext: {
    display: "flex",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },

  categorylinks: {
    textDecoration: "none",
    color: "green",
  },
  categorylinkstext: {
    paddingtop: "8px",
    fontSize: "17px",
  },

  categoryicons: {
    // backgroundColor: "grey",
    marginLeft: "6px",
    border: "2px solid grey",

    width: "20px",
    height: "20px",
  },
  createicons: {
    width: "15px",
    height: "15px",
  },
  connect: {
    color: "green",
    padding: "10px 30px",
  },
  badge: {
    padding: "6px 0px 0px 0px",
  },
  avaiabilitybox: {
    borderTop: "2px solid grey",
    borderBottom: "2px solid grey",

    padding: "10px 30px",
  },
}));
