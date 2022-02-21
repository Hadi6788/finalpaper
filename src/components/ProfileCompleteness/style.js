import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  completemain: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    backgroundColor: "#e4ebe4",
    padding: "10px 20px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  icon: {
    color: "green",
    [theme.breakpoints.down("md")]: {
      marginright: "4px",
    },
  },
}));
