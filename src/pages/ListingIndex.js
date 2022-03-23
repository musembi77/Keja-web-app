import React,{useState} from 'react'
import { useStateValue } from "../components/StateProvider"
import Footer from '../components/Footer'
import { Button, withStyles } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import "antd/dist/antd.css";
import { Modal } from 'antd';

function ListingIndex() {
  const [{ currentUser }, ] = useStateValue();
  const navigate = useNavigate();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const HandleServiceListing=()=>{
    if(!currentUser){
      setIsModalVisible(true)
    }else{
      navigate(currentUser ? '/servicelisting' : '/login')
    }
  }
  const HandlePropertyListing=()=>{
    if(!currentUser){
      setIsModalVisible(true)
    }else{
      navigate(currentUser ? '/postlisting' : '/login')
    }
  }
  return(
    <div>
    <Modal title="Alert !"
          visible={isModalVisible}
          onOk={() => {
            navigate('/login')
            console.log('...')
          }}
          onCancel={() => {
            setIsModalVisible(false);
          }}>
          <p>To Access this Service you must be a Registered and Signed in user,Click Ok to Sign In</p>
  
        </Modal>
     <div className='side_1' style={{display:"flex"}}>
      <div  style={{backgroundColor:"#e5e5e5",width:"",height:"350px",flex:1,position:"relative"}}>
        <img src='./room6.jpg' alt='' style={{objectFit:"cover",width:"100%",height:"100%"}}/>
        <div style={{position:"absolute",top:"20px",left:"20px",lineHeight:"25px"}}>
          <p style={{fontFamily:"Portico-regular",fontSize:"1.6rem",}}>List Your Property.</p>
          <p>Fast & free</p>
          <p style={{width:"250px"}}>Post your place in minutes to connect with hundreds house hunters.</p>
          <ColorButton variant="contained" onClick={HandlePropertyListing}>Get Started</ColorButton>
        </div>
      </div>
     </div>
      <div style={{padding:"10px"}}>
        <h2 style={{fontFamily:"Poppins-bold"}}>Host With Keja and Get Tenants</h2>
        <p style={{marginTop:"20px"}}>Join a great Community of hosts to create an easier, efficient and reliable experiences 
            for house Hunters.</p>
        <p style={{marginTop:"20px"}}>In a matter of minutes, Keja will help your property get the much-needed visibility.
         Property advertisements are the best way to reach out to potential tenants and shortlisting
          the best among the pool of the real estate listing websites should be your first step.</p>
          <p style={{marginTop:"20px"}}>
          We bring a commendable traffic and millions of prospective tenants that visit the website every day. Make the most of this opportunity to be visible and post unlimited real estate listings 
          An owner or an agent need
           not spend hours to sell house online or trying a hand at online rental. Listing property is a matter of few minutes and you are done</p>
        <p style={{marginTop:"20px"}}>Keja has a commendable traffic and millions of prospective homebuyers and tenants visit the website every day. Make the most of this opportunity to be visible and post unlimited real estate listings</p>  
      </div>
      <div style={{padding:"10px"}}>
        <h2 style={{fontFamily:"Poppins-bold"}}>How do I post a property for rent on Keja app?</h2>
        <p style={{marginTop:"20px"}}>Join a great Community of hosts to create an easier, efficient and reliable experiences 
            for house Hunters.</p>
        <p style={{marginTop:"20px"}}>You can post rental property for free. Simply log on to Housing.com and clearly list all the details about the property such as type of property, configuration, type of furnishing, parking facility, maintenance and security deposit charges, size of the unit, your preferred tenant and any additional information that the tenant may want to know</p>
          <p style={{marginTop:"20px"}}>
          We bring a commendable traffic and millions of prospective tenants that visit the website every day. Make the most of this opportunity to be visible and post unlimited real estate listings 
          An owner or an agent need
           not spend hours to sell house online or trying a hand at online rental. Listing property is a matter of few minutes and you are done</p>
        <p style={{marginTop:"20px"}}>Make sure you post real photos of the rental property to make the most of this free ad posting for property</p>  
      </div> 
      {
        //Services
      }
     <div style={{padding:"20px",backgroundColor:"#e5e5e5"}}>
          <p style={{fontFamily:"Portico-regular",fontSize:"1.6rem",}}>List your service </p>
          <p style={{width:"300px"}}>Make your service accessible to hundreds of visitors</p>
          <p style={{width:"200px",color:"#545454",margin:"5px 0",fontSize:"0.9rem"}}>Laundry, Moving services , Sell your furniture, Wi-fi packages, cleaning Services and many more</p>
          <ColorButton variant="contained" onClick={HandleServiceListing}>List Your Service</ColorButton>
  
     </div>
     <Footer />
    </div>
  )}

export default ListingIndex;
