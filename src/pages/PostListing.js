import React,{useState} from 'react';
import { Button, withStyles } from "@material-ui/core";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import {CREATE_PROPERTY_MUTATION} from '../GraphQl/Mutations.js'
import {useMutation} from '@apollo/client';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import { GraphQLClient } from 'graphql-request'
import {useStateValue} from '../components/StateProvider'
import {useClient} from '../Client.js'
import Login from './Login'

function PostListing (){
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);
  const [{ currentUser }, dispatch] = useStateValue();
  const [showform,setShowForm]=useState();
  const [auth,setAuth]=useState();
  const handleShowForm=()=>{
      if (currentUser){
        setShowForm(!showform);
      }else{
        setAuth(!auth)
        console.log("You need to SignIn First")
      }
  }
  const closeError = () =>{
    setAuth(false)
  }

  return(
    <div>
    {showform?
      (
        <div>
          <p>Post Listing</p>
          <Form />
        </div>
      ):
      ( 
        <div style={{backgroundColor:"",position:"relative"}}>
        <Login />
        {auth? (
            <div style={{display:"flex",margin:"",width:"200px",position:"absolute",bottom:"300px",left:"25%",color:"#000000",backgroundColor:"#e5e5e5",borderRadius:"10px",padding:"10px",textAlign:"center"}}>
              <ErrorOutlineIcon style={{color:"red"}}/><p>You have to be logged in First</p>< CloseIcon onClick={closeError}/>
            </div>
          ):
          <ColorButton
          onClick={handleShowForm}
          style={{margin:"",width:"200px",position:"absolute",bottom:"300px",left:"25%",color:"#ffffff"}}
        >
          Get Started<ArrowRightAltIcon />
        </ColorButton>
        }
        
      </div>
      )}
    </div>
  )
}

export default PostListing;

const Form=()=>{
  const client = useClient()
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);
  const [landlordname, setLandlordname]=useState('');
  const [propertyname, setPropertyname]=useState('');
  const [price, setPrice]=useState('');
  const [location, setLocation]=useState('');
  const [area, setArea]=useState();
  const [description, setDescription]=useState('');
  const [amenities, setAmenities]=useState('');
  const [vacancy, setVacancy]=useState('');
  const [contact, setContact]=useState('');
  const [mainimage, setMainimage]=useState('')
  const [overviewimage, setOverviewimage]=useState('')
  const [url,setUrl]=useState('');

  const [submitting, setSubmitting]=useState(false)

const handleImageUpload = async () =>{
  console.log(mainimage)
  try{
    const data = new FormData()
      data.append("file", mainimage);
      data.append("file", overviewimage);
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
    setSubmitting(true)
    const url = await handleImageUpload();
    const variables ={
        landlordname,
        propertyname,
        price,
        location,
        description,
        amenities,
        mainimage:url,
        overviewimage:url,
        area,
        vacancy,
        contact
      }
    const {CreateProperty} = await client.request(CREATE_PROPERTY_MUTATION,variables);
    console.log('Property Created',{CreateProperty})
  }catch(error){
    console.error(error)
  }
}
  return(
    <form style={{backgroundColor:"#e5e5e5",fontSize:"0.9rem",paddingTop:"10px"}} className='form_handle'>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>LandlordName:</p>
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
              flex:0.7
            }}
            onChange={(e)=>{
              setLandlordname(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>PropertyName:</p>
          <input
            type="text"
            
            //onChange={(e) => setEmail(e.target.value)}
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
              flex:0.7
            }}
             onChange={(e)=>{
              setPropertyname(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Price/month:</p>
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
              flex:0.7
            }}
             onChange={(e)=>{
              setPrice(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
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
              flex:0.7
            }}
             onChange={(e)=>{
              setLocation(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
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
              flex:0.7
            }}
            onChange={(e)=>{
              setArea(e.target.value)
            }}
            >
            <option value="Gate A">Gate A</option>
            <option value="Gate B">Gate B</option>
            <option value="Gate C">Gate C</option>
            <option value="Gate D">Gate D</option>
          </select>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Description:</p>
          <textarea 
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#1b1b1b",
              border: "none",
              height: "100px",
              padding: "5px 10px",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              flex:0.7
            }}
             onChange={(e)=>{
              setDescription(e.target.value)
            }}
            />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Amenities:</p>
          <input
          type="text"
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: "14px",
              color: "#1b1b1b",
              border: "none",
              height: "100px",
              padding: "5px 10px",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              flex:0.7
            }}
             onChange={(e)=>{
              setAmenities(e.target.value)
            }}
            />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Vacancy:</p>
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
              flex:0.7
            }}
             onChange={(e)=>{
              setVacancy(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
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
              flex:0.7
            }}
             onChange={(e)=>{
              setContact(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
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
              flex:0.7
            }}
            accept="images*"
            onChange={(e)=>{
              setMainimage(e.target.files[0])
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"",justifyContent:"space-around",flexDirection:"column",padding:"20px"}}>
          <p style={{width:""}}>Images</p>
          <div style={{width:""}}>
            <input
              type="file"
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: "14px",
                color: "#1b1b1b",
                border: "none",
                padding: "5px 0",
                margin: "11px 0",
                outline: "none",
                overflowWrap: "break-word",
              }}

              accept="image/png, image/jpeg,image/jpg"
              onChange={(e)=>{
                setOverviewimage(e.target.files[0])
              }}
            />
            
            </div>
        </div>
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
            disabled={
              !propertyname.trim() || !price.trim()
            }
            onClick={handleSubmit}
          >
            submit
          </ColorButton>
        </div>
    </form>
  )
}