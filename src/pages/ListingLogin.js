import React from 'react'
import ListingForm from '../components/ListingForm';
import { Button, makeStyles, withStyles } from "@material-ui/core";
import {Link} from 'react-router-dom';

function PostApartment() {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);
  return(
    <div>
     <div className='side_1' style={{display:"flex"}}>
      <ListingForm />
      <div  style={{backgroundColor:"#e5e5e5",width:"",height:"350px",flex:1,position:"relative"}}>
        <img src='./room6.jpg' alt='' style={{objectFit:"cover",width:"100%",height:"100%"}}/>
        <div style={{position:"absolute",top:"20px",left:"20px",lineHeight:"25px"}}>
          <p style={{fontFamily:"Poppins-bold",fontSize:"1.6rem",}}>List Your Property.</p>
          <p>Fast & at an affordable cost</p>
          <p style={{width:"250px"}}>Post your place in minutes to connect with local renters.</p>
          <ColorButton
            className="login_submit"
            type="submit"
            //onClick={SignIn}
          >
            List Your Property
          </ColorButton>
        </div>
      </div>
     </div>
       
      {
        //Services
      }
     <div style={{padding:"20px",backgroundColor:"#e5e5e5"}}>
          <p style={{fontFamily:"Portico-regular",fontSize:"1.6rem",}}>List your service </p>
          <p style={{width:"300px"}}>Make your service accessible to thousands of visitors</p>
          <p style={{width:"200px",color:"#545454",margin:"5px 0",fontSize:"0.9rem"}}>Laundry, Moving services , Sell your furniture, Wi-fi packages, cleaning Services and many more</p>
          <ColorButton
            style={{margin:"10px 0"}}
            type="submit"
            //onClick={SignIn}
          >
            List Your Service
          </ColorButton>
     </div>
    </div>
  )}

export default PostApartment;
