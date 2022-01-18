import React,{useState} from 'react';
import { Button, withStyles } from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import {CREATE_SERVICE_MUTATION} from '../GraphQl/Mutations.js'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import {useStateValue} from '../components/StateProvider'
import {useClient} from '../Client.js'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer'

function ServiceListing (){
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);
  const [{ currentUser }] = useStateValue();
  const HandleLogin = () =>{
    window.location.href="/login"
  }

  return(
    <div>
     {currentUser?
      <Form />
      :
      <div>
      <h2>You need to be logged In</h2>
      <ColorButton onClick={HandleLogin}>You need to be logged in</ColorButton>
      </div>
      }
      
    </div>
  )
}

export default ServiceListing;

const Form=()=>{
  const client = useClient()
  const navigate = useNavigate();

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);
  const [ownername, setOwnerName]=useState('');
  const [servicename, setServicename]=useState('');
  const [type,setType]=useState('')
  const [location, setLocation]=useState('');
  const [area, setArea]=useState('');
  const [description, setDescription]=useState('');
  
  const [contact, setContact]=useState('');
  
  const [mainimage, setMainimage]=useState('')
  
  const [submission,setSubmission]=useState('')

const handleImageUpload = async () =>{
  //console.log(mainimage)
  try{
    const data = new FormData()
      data.append("file", mainimage);
      data.append('upload_preset', 'keja-web-app');
      data.append("cloud_name","musembi77")
      const res = await axios.post("https://api.cloudinary.com/v1_1/musembi77/image/upload",
        data)
      return res.data.url
  }catch(error){
    console.error(error)
  }
  
}

const handleSubmit = async (e) =>{
  try{
    e.preventDefault();
    const url = await handleImageUpload();
    
    console.log(url)

    const variables ={
        ownername,
        servicename,
        type,
        location,
        area,
        description,
        
        mainimage:url,
        
        contact
      }
    const {CreateService} = await client.request(CREATE_SERVICE_MUTATION,variables);
    console.log('Property Created',{CreateService})
    setSubmission({CreateService})
    navigate(-1);
  }catch(error){
    console.error(error)
  }
}
  
  
  return(
    <form style={{backgroundColor:"#e5e5e5",fontSize:"0.9rem",paddingTop:"10px"}} className='form_handle'>
        
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <p style={{width:"20%"}}>Name:</p>
          <input
            type="text"
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#1b1b1b",
              border: "none",
              height: "100%",
              padding: "5px 10px",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              
            }}
            onChange={(e)=>{
              setOwnerName(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <p style={{width:"20%"}}>Service name:</p>
          <input
            type="text"
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#1b1b1b",
              border: "none",
              height: "100%",
              padding: "5px 10px",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              
            }}
             onChange={(e)=>{
              setServicename(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <p style={{width:"20%"}}>PropertyType:</p>
          <select 
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#1b1b1b",
              border: "none",
              height: "100%",
              padding: "5px 10px",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              
            }}
            onChange={(e)=>{
              setType(e.target.value)
            }}
            >
            <option value="Gate A">select Service Type</option>
            <option value="BedSitter">Laundry</option>
            <option value="Movers">Movers</option>
            <option value="Gas Refill">Gas Refill</option>
            <option value="Water refill">Water refill</option>
            <option value="Wifi">Wifi</option>
          </select>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <p style={{width:"20%"}}>Location:</p>
          <input
            type="text"
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#1b1b1b",
              border: "none",
              height: "100%",
              padding: "5px 10px",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              
            }}
             onChange={(e)=>{
              setLocation(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <p style={{width:"20%"}}>Area:</p>
          <select 
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#1b1b1b",
              border: "none",
              height: "100%",
              padding: "5px 10px",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              
            }}
            onChange={(e)=>{
              setArea(e.target.value)
            }}
            >
            <option value="Gate A">select Area</option>
            <option value="Gate A">Gate A</option>
            <option value="Gate B">Gate B</option>
            <option value="Gachororo">Gachororo</option>
            <option value="Gate C">Gate C</option>
            <option value="Gate D">Gate D</option>
          </select>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <p style={{width:"20%"}}>Description:</p>
          <textarea 
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#1b1b1b",
              border: "none",
              height: "",
              padding: "5px 10px",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              
            }}
             onChange={(e)=>{
              setDescription(e.target.value)
            }}
            />
        </div>       
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <p style={{width:"20%"}}>Contact:</p>
          <input
            type="text"
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#1b1b1b",
              border: "none",
              height: "100%",
              padding: "5px 10px",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              
            }}
             onChange={(e)=>{
              setContact(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <p style={{width:"20%"}}>CoverImage:</p>
          <input
            type="file"
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#1b1b1b",
              border: "none",
              height: "100%",
              padding: "5px 0",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              
            }}
            accept="images*"
            onChange={(e)=>{
              setMainimage(e.target.files[0])
            }}
          />
        </div>
        {submission? <p style={{color:"green"}}>Submission success</p>:<p>Post your Listing</p>}
        <div style={{display:"flex",justifyContent:"center"}}>
          <ColorButton
            style={{margin:"20px 10px",width:"40%"}}
            endIcon={<DeleteIcon />}
            
            type="reset"
          >
            Discard
          </ColorButton>
          <ColorButton
            type="submit"
            style={{margin:"20px 10px",width:"40%"}}
            endIcon={<SendIcon />}
            
            onClick={handleSubmit}
          >
            submit
          </ColorButton>
        </div>
        <Footer />
    </form>
  )
}