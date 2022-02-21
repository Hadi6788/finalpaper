import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./style";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BestMatchesCard from "../BestMatchesCard";
import data from "./data";
const BestMatch = () => {
    const classes = useStyles();
  return (
    <>
      <Box  >
       {data.map(({  title,timing, desc  }) => {
            return (
              <>
                <BestMatchesCard title={title} timing={timing} desc={desc} />
              </>
            );
          })}
      </Box>
    </>
  );
};

export default BestMatch;
