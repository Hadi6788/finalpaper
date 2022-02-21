import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px 40px 5px 40px",
    justifyContent: "space-between",
    boxShadow: "0px 1px 17px rgba(0, 0, 0, 0.2)",
    background: "#092e2b",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontWeight: "bold",
    paddingRight: "10px",
  },
  leftnav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row reverse",
  },

  menubar: {
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      // flexDirection: "row reverse",
    },
  },
  searcicon_container: {
    paddingLeft: "10px",
  },
  list: {
    gap: "30px",
    display: "flex",
    alignItems: "center",

    color: "#fff",
    fontSize: 14,
    fontWeight: 500,
    padding: "0px 0px 0px 0px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  text: {
    color: "#3E3E3E",
    "&:hover": {
      color: "#005084",
    },
  },

  search_container: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#21635e",
    height: "30px",
    color: "#fff",
    borderRadius: "40px",
  },

  upwork: {
    textDecoration: "none",
  },
  search_icon: {
    paddingRight: 4,
  },
  search_input: {
    border: "none",
    width: "100%",

    height: "20px",

    outline: "none",

    fontSize: 12,
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "14px",
    color: "#fff",
  },

  accounts_icon: {
    color: "#fff",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  a: {
    color: "#fff",
  },
  menubar: {
    display: "flex",

    [theme.breakpoints.down("md")]: {
      flexDirection: "row-reverse",
    },
  },

  buttoncolor: {
    color: "yellow",
    backgroundColor: "green",
  },
  account_icons_container: {
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  dropdown: {
    listStyle: "none",

    background: "#ffff",
    width: "160px",
    overflow: "auto",
    position: "absolute",
    color: "#000",
  },
  dropdownlist: {
    display: "flex",
    height: "50px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    paddingLeft: "10px",
    alignItems: "center",
  },

  dropdownlista: {
    fontSize: "16px",
    paddingLeft: "6px",
  },
}));
