import React,{useState,
  // useEffect
} from 'react';
import { Button, withStyles } from "@material-ui/core";
import {CREATE_PROPERTY_MUTATION} from '../GraphQl/Mutations.js'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import {useStateValue} from '../components/StateProvider'
import {useClient} from '../Client.js'
import Footer from '../components/Footer'

function PostListing (){
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
  const [type,setType]=useState('')
  const [longitude, setLongitude]=useState('')
  const [latitude, setLatitude]=useState('')
  const [location, setLocation]=useState('');
  const [area, setArea]=useState('');
  const [description, setDescription]=useState('');
  const [amenities, setAmenities]=useState('');
  const [policy, setPolicy]=useState('');
  const [vacancy, setVacancy]=useState('');
  const [contact, setContact]=useState('');
  //const [payment, setPayment]=useState('');
  const [mainimage, setMainimage]=useState('')
  const [image1, setImage1]=useState('')
  const [image2, setImage2]=useState('')
  const [image3, setImage3]=useState('')
  const [image4, setImage4]=useState('')
  //const [url,setUrl]=useState('');
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
const handleImageUpload1 = async () =>{
  //console.log(mainimage)
  try{
    const data = new FormData()
      data.append("file", image1);
      data.append('upload_preset', 'keja-web-app');
      data.append("cloud_name","musembi77")
      const res = await axios.post("https://api.cloudinary.com/v1_1/musembi77/image/upload",
        data)
      return res.data.url
  }catch(error){
    console.error(error)
  }
  
}
const handleImageUpload2 = async () =>{
  //console.log(mainimage)
  try{
    const data = new FormData()
      data.append("file", image2);
      data.append('upload_preset', 'keja-web-app');
      data.append("cloud_name","musembi77")
      const res = await axios.post("https://api.cloudinary.com/v1_1/musembi77/image/upload",
        data)
      return res.data.url
  }catch(error){
    console.error(error)
  }
  
}
const handleImageUpload3 = async () =>{
  //console.log(mainimage)
  try{
    const data = new FormData()
      data.append("file", image3);
      data.append('upload_preset', 'keja-web-app');
      data.append("cloud_name","musembi77")
      const res = await axios.post("https://api.cloudinary.com/v1_1/musembi77/image/upload",
        data)
      return res.data.url
  }catch(error){
    console.error(error)
  }
  
}
const handleImageUpload4 = async () =>{
  //console.log(mainimage)
  try{
    const data = new FormData()
      data.append("file", image4);
      data.append('upload_preset', 'keja-web-app');
      data.append("cloud_name","musembi77")
      const res = await axios.post("https://api.cloudinary.com/v1_1/musembi77/image/upload",
        data)
      return res.data.url
  }catch(error){
    console.error(error)
  }
  
}
const INITIAL_VIEWPORT ={
      width:375,
      height:200,
      latitude: -1.0969,
        longitude: 37.0154,
        zoom: 14
  }
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const [propertyPosition, setPropertyPosition] = useState([])

  // useEffect(()=>{
  //   getPropertyPosition()
  //   //console.log(propertyPosition.longitude)
  // },[])

  const getPropertyPosition=()=>{
    if("geolocation" in navigator){
      navigator.geolocation.getCurrentPosition(position=>{
        const{latitude,longitude}=position.coords
          setViewport({...viewport, latitude,longitude})
          setPropertyPosition({latitude,longitude})
      })
    }
  }
  getPropertyPosition()
const handleSubmit = async (e) =>{
  try{
    e.preventDefault();
    const url = await handleImageUpload();
    const url1 = await handleImageUpload1();
    const url2 = await handleImageUpload2();
    const url3 = await handleImageUpload3();
    const url4 = await handleImageUpload4();
    console.log(url)
    console.log(url1)

    const variables ={
        landlordname,
        propertyname,
        price,
        type,
        longitude,
        latitude,
        location,
        area,
        description,
        amenities,
        policy,
        mainimage:url,
        image1:url1,
        image2:url2,
        image3:url3,
        image4:url4,
        vacancy,
        contact
      }
    const {CreateProperty} = await client.request(CREATE_PROPERTY_MUTATION,variables);
    console.log('Property Created',{CreateProperty})
    setSubmission({CreateProperty})
    
  }catch(error){
    console.error(error)
  }
}
  
  
  return(
    <form style={{backgroundColor:"#e5e5e5",fontSize:"0.9rem",paddingTop:"10px"}} className='form_handle'>
        
        <div style={{fontSize:"0.6rem",padding:"10px"}}>
            <p >We will use your location to help make your apartment visible on maps</p>
            {propertyPosition?
              <div>
                <p>Your Location Is</p>
                <p>longitude: <span style={{color:"#ffa31a"}}>{propertyPosition.longitude}</span></p>
                <p>latitude : <span style={{color:"#ffa31a"}}>{propertyPosition.latitude}</span></p>
              </div>:
              <div>
                <p>longitude</p>
                <p>latitude </p>
              </div>
              
              
            }
            
          </div>
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
              
            }}
             onChange={(e)=>{
              setPrice(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
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
            <option value="BedSitter">Select type</option>
            <option value="BedSitter">BedSitter</option>
            <option value="Hostel">Hostel</option>
            <option value="OneBedroom">OneBedroom</option>
            <option value="TwoBedroom">TwoBedroom</option>
            <option value="ThreeBedroom">Three Bedroom</option>
            <option value="shop">Shop</option>
          </select>
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
              
            }}
             onChange={(e)=>{
              setLocation(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Latitude:</p>
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
              setLatitude(e.target.value)
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Longitude:</p>
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
              setLongitude(e.target.value)
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
              
            }}
            onChange={(e)=>{
              setArea(e.target.value)
            }}
            >
            <option value="Gate A">Gate A</option>
            <option value="Gate B">Gate B</option>
            <option value="Gachororo">Gachororo</option>
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
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Amenities:</p>
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
              setAmenities(e.target.value)
            }}
            />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Policies:</p>
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
              setPolicy(e.target.value)
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
              
            }}
             onChange={(e)=>{
              setContact(e.target.value)
            }}
          />
        </div>
        {
          // <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        //   <p style={{width:"20%"}}>Mpesa ref code:</p>
        //   <input
        //     type="text"
        //     style={{
        //       fontFamily: "Poppins-Regular",
        //       fontSize: "14px",
        //       color: "#1b1b1b",
        //       border: "none",
        //       height: "100%",
        //       padding: "5px 10px",
        //       margin: "11px",
        //       outline: "none",
        //       overflowWrap: "break-word",
        //       
        //     }}
        //      onChange={(e)=>{
        //       setPayment(e.target.value)
        //     }}
        //   />
        // </div>
      }
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
              
            }}
            accept="images*"
            onChange={(e)=>{
              setMainimage(e.target.files[0])
            }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Image 1:</p>
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
                setImage1(e.target.files[0])
              }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Image 2:</p>
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
                setImage2(e.target.files[0])
              }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Image 3:</p>
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
                setImage3(e.target.files[0])
              }}
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Image 4:</p>
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
                setImage4(e.target.files[0])
              }}
          />
        </div>
        {submission? 
          <div>
          <p style={{color:"green"}}>Submission success</p>
          <ColorButton
            style={{margin:"20px 0",width:"100%"}}
            endIcon={<DeleteIcon />}
            
            type="reset"
          >
            New Property
          </ColorButton>
          </div>
        :

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
        }
        
        <Footer />
    </form>
  )
}