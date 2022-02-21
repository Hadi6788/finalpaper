import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  likedmain: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    width: "100%",
    padding: "20px 0px 20px 0px",
    margin: "40px 0px 40px 0px",
  },
  likedtext: {
    paddingLeft: "40px",
    marginBottom: "10px",
  },
}));
