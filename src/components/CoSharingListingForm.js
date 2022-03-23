import React, { useState } from 'react';
import {
  Form,
  Input,
} from 'antd';
import { Button, withStyles } from "@material-ui/core";
import {CREATE_COSHARING_MUTATION} from '../GraphQl/Mutations.js'
import {useClient} from '../Client.js'
import axios from 'axios'

function CoSharingListingForm({formvisible}){
	const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);
  //To set the variables and inputs
  const [name, setName]= useState('')
  const [price, setPrice]= useState('')
  const [description, setDescription]= useState('')
  const [propertytype, setPropertytype]= useState('')
  const [location, setLocation]= useState('')
  const [gender, setGender]= useState('')
  const [contact, setContact]= useState('')
  const [coverimage, setCoverImage]= useState('')
  //Hadling submit
  const client = useClient()
  const handleImageUpload = async () =>{
  //console.log(mainimage)
    try{
      const data = new FormData()
        data.append("file", coverimage);
        data.append('upload_preset', 'keja-web-app');
        data.append("cloud_name","musembi77")
        const res = await axios.post("https://api.cloudinary.com/v1_1/musembi77/image/upload",
          data)
        return res.data.url
    }catch(error){
      console.error(error)
    }
  }
  const HandleSubmit= async (e) =>{
    e.preventDefault();
    setSubmission(true)
    const url = await handleImageUpload();
    console.log(url)
    const variables ={
        name,
        price,
        description,
        location,
        gender,
        propertytype,
        contact,
        coverimage,
      }
    const {createCoSharing} = await client.request(CREATE_COSHARING_MUTATION,variables);
    console.log('Co sharing Ad created',{createCoSharing})
  }
  //submission
  const [submission,setSubmission] = useState(false)
  return(
    <>
     {submission ? 

      <p>submitting...</p>:
    <Form style={{padding:"10px"}}>
  <Form.Item label="Name">
        <Input onChange={(e)=>{
          setName(e.target.value)
        }}/>
    </Form.Item>
    <Form.Item label="Price">
        <Input  
        onChange={(e)=>{
          setPrice(e.target.value)
        }}/>
    </Form.Item>
    <Form.Item label="Descripton (Tell Your roommate what to expect)" maxlength="100">
        <Input.TextArea 
        placeholder="Tell Your roommate what you need and what to expect e.g We will split Shopping bills "
        onChange={(e)=>{
          setDescription(e.target.value)
        }}/>
    </Form.Item>
    <div style={{display:"flex",alignItems:"center",justifyContent:""}}>
          <p style={{width:""}}>PropertyType:</p>
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
              setPropertytype(e.target.value)
            }}
            >
            <option value="BedSitter">Select type</option>
            <option value="Singles">Singles</option>
            <option value="BedSitter">BedSitter</option>
            <option value="Hostel">Hostel</option>
            <option value="OneBedroom">OneBedroom</option>
            <option value="TwoBedroom">TwoBedroom</option>
            <option value="ThreeBedroom">Three Bedroom</option>
          </select>
        </div>
    <Form.Item label="Location">
        <Input  
        onChange={(e)=>{
          setLocation(e.target.value)
        }}/>
    </Form.Item>
    <div style={{display:"flex",alignItems:"center",justifyContent:""}}>
          <p style={{width:""}}>Gender Preferred</p>
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
              setGender(e.target.value)
            }}
            >
            <option value="Female">Select option</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="open">Open</option>
          </select>
        </div>
    <Form.Item label="Contact">
        <Input  
        onChange={(e)=>{
          setContact(e.target.value)
        }}/>
    </Form.Item>
    <div style={{display:"flex",alignItems:"center",justifyContent:""}}>
          <p style={{width:""}}>CoverImage:</p>
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
            onChange={(e)=>{
              setCoverImage(e.target.value)
            }}
            accept="images*"
          />
        </div>
        <p>&#128175;Great Job one more step to go, finish up your ad by clicking Submit</p>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <ColorButton type='reset'>Cancel</ColorButton>
          <ColorButton type='submit' onClick={HandleSubmit} >Submit</ColorButton>
        </div>
        
      </Form>
    }
    </>
	)
}

export default CoSharingListingForm;