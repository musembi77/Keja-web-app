import React from 'react'
import ListingForm from '../components/ListingForm';
import { Button, withStyles } from "@material-ui/core";
import {useState,useEffect } from "react";
import {GoogleLogin} from "react-google-login"
import {GoogleLogout} from "react-google-login"
import { GraphQLClient } from 'graphql-request'
import { useStateValue } from "../components/StateProvider"
import {GET_USER_QUERY} from "../GraphQl/Queries.js"
import {BASE_URL} from '../Client.js'

function PostApartment() {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);
  const [{ currentUser }, dispatch] = useStateValue();
  const onSuccess = async googleUser =>{
        try{
          const idToken = googleUser.getAuthResponse().id_token;
          //console.log({idToken})
          const client = new GraphQLClient(BASE_URL,{
            headers:{authorization: idToken}
          })
          const { get_User } = await client.request(GET_USER_QUERY)
          console.log({get_User})
          dispatch({
            type:"LOGIN_USER",
            payload:get_User
          })
          dispatch({
            type:"IS_LOGGEDIN",
            payload:googleUser.isSignedIn()
          })
        }catch(err){
          onFailure(err)
        }
      }

      const onFailure = err =>{
        console.log("Error Logging in", err)
      }
      //signout
      const onSignOut = () =>{
        dispatch({
          type:"SIGNOUT_USER",
        })
        console.log("user signed out")
      }
  return(
    <div>
     <div className='side_1' style={{display:"flex"}}>
      <div  style={{backgroundColor:"#e5e5e5",width:"",height:"350px",flex:1,position:"relative"}}>
        <img src='./room6.jpg' alt='' style={{objectFit:"cover",width:"100%",height:"100%"}}/>
        <div style={{position:"absolute",top:"20px",left:"20px",lineHeight:"25px"}}>
          <p style={{fontFamily:"Poppins-bold",fontSize:"1.6rem",}}>List Your Property.</p>
          <p>Fast & at an affordable cost</p>
          <p style={{width:"250px"}}>Post your place in minutes to connect with local renters.</p>
          <ColorButton
            className="login_submit"
            type="submit"
            //onClick={SignIn}
            href="/postlisting"
          >
            List Your Property
          </ColorButton>
        </div>
      </div>
     </div>
       
      {
        //Services
      }
     <div style={{padding:"20px",backgroundColor:"#e5e5e5"}}>
          <p style={{fontFamily:"Portico-regular",fontSize:"1.6rem",}}>List your service </p>
          <p style={{width:"300px"}}>Make your service accessible to thousands of visitors</p>
          <p style={{width:"200px",color:"#545454",margin:"5px 0",fontSize:"0.9rem"}}>Laundry, Moving services , Sell your furniture, Wi-fi packages, cleaning Services and many more</p>
          <ColorButton
            style={{margin:"10px 0"}}
            type="submit"
            href="/postlisting"
            >
            List Your Service
          </ColorButton>
     </div>
    </div>
  )}

export default PostApartment;
