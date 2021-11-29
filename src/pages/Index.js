
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SearchIcon from "@mui/icons-material/Search"
import RoomIcon from "@mui/icons-material/Room"
import VerifiedIcon from '@mui/icons-material/Verified';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import GroupsIcon from '@mui/icons-material/Groups';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
//import ExploreIcon from '@mui/icons-material/Explore';
//import StorefrontIcon from '@mui/icons-material/Storefront';

function Index(){
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  // const ColorButton = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText("#ffa31a"),
  //   backgroundColor: "#ffa31a",
  //   '&:hover': {
  //     backgroundColor: "#ffa31a",
  //   },
  // }));
  
  return(
    <div >
      <div style={{display:"flex",flexDirection:"column",width:"100vw"}}>
        {
          
        }
        
        {//<p style={{fontFamily:"Poppins-Bold",color:"#000000",margin:"0 25%",fontSize:"2.5rem"}}>Are you looking for an apartment?</p>
        }
      </div>
      <div style={{position:"relative"}}>
        <img src="/index1.jpg" alt="logo" style={{width:"100%",height:"450px",objectFit:"cover",}}/>
        <form 
            style={{
                display:"flex",
                position:"absolute",
                top:"50%",
                left:"20%",
                //right:"25%",
                margin:"0 auto",
                width:"50%",
                height:"40px",
                backgroundColor:"grey"}} >
            <input placeholder="Search Apartment, property, stalls" 
                style={{
                    flex:"1",
                    width:"200px",
                    outline:"none",
                    border:"none",
                    color:"#000000",
                    padding:"5px",
                }}
            />
            <button
                style={{border:"none",padding:"10px 10px",display:"flex",justifyContent:"center",backgroundColor:"#ffa31a"}}
                onClick={handleSubmit}
            ><SearchIcon />search</button>
        </form>
      </div>

      <div style={{backgroundColor:"#ffffff",justifyContent:'center',color:"#000000",textAlign:"center",width:"100%",height:"300px",fontSize:"1.8rem",fontWeight:"bold",padding:"20px"}}>
          <p>Every Apartment Near You, In One Place</p>
          <span style={{fontSize:"0.9rem",margin:"0 5%",width:"50%",color:"#000000"}}>Browse 1000+ apartments and find the perfect place for you</span>
          <Link className="btn_1" to="./explore">
            <TravelExploreIcon />
            <p>Explore</p>
          </Link>
      </div>
      {
        //host an apartment
      }
      <div style={{position:"relative",height:"400px",width:"100%"}}>
        <img src="./index2.jpg" alt="" style={{height:"100%",width:"100%",objectFit:"cover"}}/>
        <p style={{
          position:"absolute",
          top:"20px",
          left:"20px",
          color:"#ffffff",
          fontSize:"2.4rem",
          textAlign:"center",
          overflow:"wrap",
          width:"50px",
          fontFamily:"Portico-regular",
          //backgroundColor:"rgb(255,255,255,0.7",
          
        }}>List an Apartment</p>
        <p style={{
          position:"absolute",
          top:"180px",
          left:"20px",
          color:"#ffffff",
          fontSize:"0.9rem",
          textAlign:"center",
          overflow:"wrap",
          //width:"50px",
          fontFamily:"Poppins-regular",
          //backgroundColor:"rgb(255,255,255,0.7",
          
        }}>List an Apartment</p>
        <Link style={{
          position:"absolute",
          top:"250px",
          left:"20px",
          color:"#ffffff",
          fontSize:"0.9rem",
          textAlign:"center",
          overflow:"wrap",
          //width:"50px",
          fontFamily:"Poppins-regular",
          backgroundColor:"#ffa31a",
          padding:"10px",
          textDecoration:"none"
          
        }} to="./listwithUs">List an Apartment </Link>
      </div>
      {
        /*<div style={{display:"flex",height:"300px"}}>
          <div style={{display:"flex",flexDirection:"column",width:"50%",lineHeight:"25px",fontSize:"0.9rem",padding:"10px",borderRight:"1px solid grey",textAlign:"center"}}>
              <h3><span style={{color:"#ffa31a",fontSize:"1.5rem",fontFamily:"poppins-bold"}}>WHY</span> choose us?</h3>
              <p><ThumbUpIcon />Fast and simple</p>
              <p><MapsHomeWorkIcon />Wide variety of apartments to Choose from</p>
              <p><VerifiedIcon />Secure and reliable</p>
              <p><MoneyOffIcon />At no extra Cost</p>
              <p><GroupsIcon />be part of the community</p>
          </div>
          <img src="/download.jpg" alt="" style={{objectFit:"cover",width:"50%",height:"100%"}}/>
      </div>
      */
     }
      <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#08CCCC",height:"100%",color:"white",fontFamily:"Poppins-Bold",padding:"10px"}}>
        <div >
          <p style={{fontSize:"1.5rem"}}>100+ </p>
          <span>verified flats listed</span>
          <p  style={{fontSize:"1.5rem"}}>2,000+ </p>
          <span>Home seekers</span>
          <p  style={{fontSize:"1rem"}}>Daily updates</p>
        </div>  
        <RoomIcon style={{fontSize:"5rem",margin:"50px",color:"#ffa31a"}}/>
      </div>
          {
            //<ColorButton variant="contained" endIcon={<ExploreIcon/>} style={{margin:"0 10px"}}>Explore</ColorButton>
            /*<div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",overflow:"scroll"}}>
            {exploreitem.map((item)=>{
              return(
                <div style={{width:"150px",height:"150px",margin:"5px 10px",borderRadius:"10px",fontSize:"0.8rem",border:"1px solid grey",textAlign:"center"}}>
                    <img src={item.image} alt="logo" style={{width:"100%",height:"80%",borderRadius:"10px",objectFit:"contain"}}/>
                    <p>{item.title}</p>
                </div>
              )
            })}
          </div>*/
        }
        
    </div>
  )
}

export default Index