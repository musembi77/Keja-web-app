import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search"
import RoomIcon from "@mui/icons-material/Room"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function Index(){
  return(
    <div >
      <div style={{display:"flex",flexDirection:"column",width:"100vw"}}>
      </div>
      <div style={{position:"relative"}}>
        <img src="/index1.jpg" alt="logo" style={{width:"100%",height:"450px",objectFit:"cover",}}/>
        <div 
            style={{
                display:"flex",
                position:"absolute",
                top:"50%",
                left:"20%",
                margin:"0 auto",
                width:"50%",
                height:"40px",
                backgroundColor:"grey",
                textDecoration:"none"
              }} >
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
            <Link
                style={{border:"none",color:"#000000",textDecoration:"none",padding:"10px 10px",display:"flex",justifyContent:"center",backgroundColor:"#ffa31a"}}
                to="/explore"
            ><SearchIcon />Search</Link>
        </div>
      </div>

      <div style={{backgroundColor:"#ffffff",justifyContent:'center',color:"#000000",textAlign:"center",width:"100%",height:"300px",fontSize:"1.8rem",fontWeight:"bold",padding:"10px"}}>
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
          fontFamily:"Poppins-regular",
        }}>List an Apartment</p>
        <Link style={{
          position:"absolute",
          top:"250px",
          left:"20px",
          color:"#ffffff",
          fontSize:"0.9rem",
          textAlign:"center",
          overflow:"wrap",
          fontFamily:"Poppins-regular",
          backgroundColor:"#ffa31a",
          padding:"10px",
          textDecoration:"none"
          
        }} to="./listwithUs">List an Apartment </Link>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"grey",height:"100%",color:"white",fontFamily:"Poppins-Bold",padding:"10px"}}>
        <div >
          <p style={{fontSize:"1.5rem"}}>100+ </p>
          <span>verified flats listed</span>
          <p  style={{fontSize:"1.5rem"}}>2,000+ </p>
          <span>Home seekers</span>
          <p  style={{fontSize:"1rem"}}>Daily updates</p>
        </div>  
        <RoomIcon style={{fontSize:"5rem",margin:"50px",color:"#ffa31a"}}/>
      </div>
    </div>
  )
}

export default Index