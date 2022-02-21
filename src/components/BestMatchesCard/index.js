import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
const BestMatchesCard = ({  title,timing, desc  }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.bestmatchmain}>
        <Box>
          <Typography>{title}</Typography>
        </Box>
        <Box>
          <Typography>
          {timing}
          </Typography>
          <Typography>
           {desc}
          </Typography>
          <Typography>proposal less than 5</Typography>
        </Box>

        <Box>
    <StarBorderIcon/>
      <StarBorderIcon/> 
      <StarBorderIcon/>
      <StarBorderIcon/>
       <Typography>4k spent</Typography>
           <Typography><LocationOnIcon/> Liuthiana</Typography>
        </Box>
      </Box>
    </>
  );
};

export default BestMatchesCard;
