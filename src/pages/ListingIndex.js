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
          <p style={{fontFamily:"Poppins-bold",fontSize:"1.6rem",}}>List Your Property.</p>
          <p>Fast & free</p>
          <p style={{width:"250px"}}>Post your place in minutes to connect with hundreds house hunters.</p>
          <ColorButton variant="contained" onClick={HandlePropertyListing}>List Your Property</ColorButton>
        </div>
      </div>
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
