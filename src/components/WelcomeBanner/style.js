import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  welcomemain: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "20px 0px 20px 0px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  welcomemaintext: {
    paddingLeft: "40px",
  },
  plan: {
    width: "100px",
    height: "100px",
    paddingRight: "40px",
  },
}));
