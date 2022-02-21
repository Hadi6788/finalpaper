import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  cardmain: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    padding: "20px 30px",
  },

  profileimage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
}));
