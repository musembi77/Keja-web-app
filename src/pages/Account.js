import React,{useState,useEffect} from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {CREATE_USERINFO_MUTATION} from '../GraphQl/Mutations.js'
import {GET_USER_QUERY} from "../GraphQl/Queries.js"
import {useClient} from '../Client.js'
import { useStateValue } from "../components/StateProvider"

function Account(){
   const client = useClient()
   const [{ currentUser } ] = useStateValue();
	 //console.log(currentUser._id)
       //to edit info
       const [updateinfo,setUpdateInfo]=useState(false)

      const HandleUpdateInfo=()=>{
        setUpdateInfo(!updateinfo)
        console.log('updating')
      }
      const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#ffa31a"),
        backgroundColor: "#ffa31a",
        '&:hover': {
          backgroundColor: "#ffa31a",
        },
      }));
      //to retrieve the info
      const [contact,setContact]=useState('')
      const [pin,setPin]=useState('')
      
      useEffect(()=>{
        try{
          const Details=async ()=>{
              const {get_User}  = await client.request(GET_USER_QUERY)
              try{
                //console.log(get_User.userinfo)
                const data = await get_User.userinfo[get_User.userinfo.length-1]
              //console.log(data)
                //console.log(data)
                setContact(data.phonenumber)
                setPin(data.location)
              }catch(error){
                console.error('Error retrieving values')
              }
            }
          Details()
        }catch(error){
          console.error('error')
        }
      },[client])
      //to get new info
      const [phonenumber,setPhonenumber]=useState('')
      const [location,setLocation]=useState('')
      const[userId,setUserId]=useState('')
      //to submit the new info
	     const HandleSubmitUserInfo=async()=>{
        if(currentUser._id){
          setUserId(currentUser._id)
          console.log(userId)
        }else{
          console.log('error')
        }

        const variables = {
          userId,
          phonenumber,
          location
        }
        try{
          const {createuserinfo} = await client.request(CREATE_USERINFO_MUTATION,variables)
          console.log('UserInfo Created/updated',{createuserinfo})
          setUpdateInfo(false)
        }catch(err){
          console.error(err)
        }       
        
      }
	return(
		<div style={{display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column"}}>
              <div style={{display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column"}}>
                {currentUser? 
                  <p style={{}}>Hello, {currentUser.name}</p>:
                  <p style={{}}>Hello, User</p>
                }
                {currentUser? 
                  <img src={currentUser.picture} alt='pp' 
                  style={{width:"120px",
                  height:"120px",
                  borderRadius:"999px",
                  margin:"20px 0"}}/>:
                  <p style={{}}>Hello, User</p>
                }
                
              </div>
              <div style={{display:"flex",alignItems:"center"}} onClick={HandleUpdateInfo}>
                <p>Edit Info</p>
                <ModeEditIcon style={{fontSize:"15px",color:"#ffa31a",marginLeft:"5px"}}/>
              </div>
              <div >
                <div style={{display:"flex",alignItems:"center"}}>
                  <EmailIcon style={{color:"#ffa31a",fontSize:"14px"}}/>
                  {currentUser? 
                  <p style={{fontSize:"14px"}}>{currentUser.email}</p>:
                  <p style={{}}>Hello, User</p>
                }
                </div>
                <div style={{display:"flex",alignItems:"center",marginTop:"10px"}}>
                  <PhoneIcon style={{color:"#ffa31a",fontSize:"16px"}}/>
                  
                    {updateinfo?
                    <input placeholder='07########' type='text'
                    onChange={(e)=>{
                      setPhonenumber(e.target.value)
                    }}
                    style={{outline:"none",
                      border:"1px solid #eee",
                      padding:"2px",
                      backgroundColor:"#eee",
                      marginLeft:"5px",
                      borderRadius:"5px",
                      fontFamily:"Poppins-Regular"
                    }}
                    />
                    :
                    <p>{contact}</p>               
                  }
                  
                </div>
                <div style={{display:"flex",alignItems:"center",marginTop:"10px"}}>
                  <RoomRoundedIcon style={{color:"#ffa31a",fontSize:"16px"}}/>
                  
                  {updateinfo?
                    <input placeholder='location' type='text'
                    onChange={(e)=>{
                      setLocation(e.target.value)
                    }}
                    style={{outline:"none",
                      border:"1px solid #eee",
                      padding:"2px",
                      backgroundColor:"#eee",
                      marginLeft:"5px",
                      borderRadius:"5px",
                      fontFamily:"Poppins-Regular"
                    }}
                  />
                    :<p>{pin}</p>
                    
                  }
                </div>
                </div>
                {updateinfo?
                  <div style={{display:"flex",justifyContent:"space-between",margin:'10px'}}>
                    <Button onClick={HandleUpdateInfo} style={{marginRight:"20px"}} variant='outlined'>Cancel</Button>
                    <ColorButton onClick={HandleSubmitUserInfo}>Submit</ColorButton>
                    </div>
                    :null
                    
                  }
                
                </div>
	)
}

export default Account