import React from 'react';
import {SearchFilter} from '../components/Search';
import {Link } from "react-router-dom"
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
//import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import CloseIcon from '@mui/icons-material/Close';

function Home(){
  const Location=[
    {
      image:"",
      title:"Gate A",
      link:"./explore",
    },
    {
      image:"",
      title:"Gate B",
      link:"./explore",
    },
    {
      image:"",
      title:"Gate C",
      link:"./explore",
    },
    {
      image:"",
      title:"Gate D",
      link:"./explore",

    },
    
]
const NewBuildings=[
  {
  image:"./room1.jpg",
  title:"Virmaj",
  },
  {
    image:"./room2.jpg",
    title:"CDF",
  },
  {
    image:"./room3.jpg",
    title:"Executive",
  },
  {
    image:"./room4.jpg",
    title:"Nyamwaj",
  },
]
const Services=[
  {
  image:"./payRent.svg",
  title:"Pay Rent",
  },
  {
    image:"./movers.svg",
    title:"Movers",
  },
  {
    image:"./furniture.svg",
    title:"Furniture",
  },
  {
    image:"./laundry.png",
    title:"Laundry",
  },
  {
    image:"./wifi.png",
    title:"Wi-fi",
  },
]
  return(
    <div>
      <SearchFilter />
      <div style={{padding:"10px"}}>
      {
        //Communities
      } 
      <div >
        <p>Communities</p>
          <div style={{
            display:"flex",
            //justifyContent:"space-between",
            alignItems:"center",
            textAlign:"center",
            overflow:"auto",
            whiteSpace:"nowrap",
            width:"100%"
          }} className="scrollbar">
            {Location.map((item)=>{
              return(
                <div> 
                  <ul style={{
                    //backgroundColor:"#f79d00",
                    width:"100%",
                    textDecoration:"none",
                    listStyle:"none"
                  }}>
                    <li>
                      <Link style={{                      
                        fontSize:"0.9rem",
                        fontFamily:"Poppins-Bold",
                        textDecoration:"none",
                        margin:"0 10px",
                        color:"#000000"
                      }} to='/explore'>
                        {item.title}
                      </Link>
                    </li>
                  </ul>
                  
                </div>
              )
            })}
          </div>
      </div>
      {
        //Featured / Recommended
      } 
      <div>
        <p>Featured</p>
        <div style={{
          display:"flex",
          //justifyContent:"space-between",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"100%",
          margin:"10px",
          //padding:"10px",
        }} className="scrollbar">
          {NewBuildings.map((item)=>{
            return(
              <div> 
                <ul style={{
                  //backgroundColor:"#f79d00",
                  width:"175px",
                  height:"150px",
                  textAlign:"center",
                  placeItems:"center",
                  position:"relative",
                  borderRadius:"10px",
                  margin:"10px",
                  textDecoration:"none",
                  listStyle:"none",
                  //borderRadius:"30px"
                }}>
                  <li>
                    <Link style={{
                      color:"#000000",
                      fontSize:"0.9rem",
                      fontFamily:"Poppins-Bold",
                      textDecoration:"none",
                    }} to='/property'>
                      <img src={item.image} alt='' style={{ width:"175px",height:"120px",objectFit:"cover"}}/>
                      <p>{item.title}</p>
                    </Link>
                  </li>
                </ul>
                
              </div>
            )
          })}
        </div>
      </div>
      {
        //Servives
      } 
      <div>
        <p>Services</p>
        <div style={{
          display:"flex",
          //justifyContent:"space-between",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"100%",
          margin:"10px",
          //padding:"10px"
        }} className="scrollbar">
          {Services.map((item)=>{
            return(
              <div> 
                <ul style={{
                  //backgroundColor:"#f79d00",
                  width:"100px",
                  height:"100px",
                  textAlign:"center",
                  placeItems:"center",
                  position:"relative",
                  borderRadius:"10px",
                  margin:"10px",
                  textDecoration:"none",
                  listStyle:"none",
                }}>
                  <li>
                    <Link style={{
                      color:"#000000",
                      fontSize:"0.9rem",
                      fontFamily:"Poppins-Bold",
                      textDecoration:"none",
                    }} to='/property'>
                      <img src={item.image} alt='' 
                      style={{ 
                        width:"100px",
                        height:"80px",
                        objectFit:"contain",
                        borderRadius:"30px"}}/>
                      <p>{item.title}</p>
                    </Link>
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      {
        //NewBuildings
      }
      <div>
        <p>Featured</p>
        <div style={{
          display:"flex",
          //justifyContent:"space-between",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"100%",
          margin:"10px",
          '&::-webkit-scrollbar-thumb': { display:"none" }
          //padding:"10px",
        }} className="scrollbar">
          {NewBuildings.map((item)=>{
            return(
              <div> 
                <ul style={{
                  //backgroundColor:"#f79d00",
                  width:"175px",
                  height:"150px",
                  textAlign:"center",
                  placeItems:"center",
                  position:"relative",
                  borderRadius:"10px",
                  margin:"10px",
                  textDecoration:"none",
                  listStyle:"none",
                }}>
                  <li>
                    <Link style={{
                      color:"#000000",
                      fontSize:"0.9rem",
                      fontFamily:"Poppins-Bold",
                      textDecoration:"none",
                    }} to='/property'>
                      <img src={item.image} alt='' style={{ width:"175px",height:"120px",objectFit:"cover"}}/>
                      <p>{item.title}</p>
                    </Link>
                  </li>
                </ul>
                
              </div>
            )
          })}
        </div>
      </div>            
      </div>
      <p>Home</p>
    </div>
  )
}

export default Home