import React from 'react';
import {Link } from 'react-router-dom'
import { Button, makeStyles, withStyles } from "@material-ui/core";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Footer from '../components/Footer'
function WishList(){
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return(
   <div style={{justifyContent:"center",textAlign:"center",lineHeight:"50px"}}>
     <p>WishList</p>
     <div>
       <p>Your WishList Seems to be empty</p>
       <Link to="/explore" style={{textDecoration:"none"}}>
            <ColorButton
              variant="contained"
              className={classes.margin}
              startIcon={<TravelExploreIcon />}
            >
              Explore
            </ColorButton>
      </Link>
      <p>Explore to Find the Right Apartment for you</p>
     </div>
     <Footer />
   </div>
  )
}

export default WishList;