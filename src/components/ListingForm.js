import React from "react";
import { Button, withStyles } from "@material-ui/core";


function ListingForm(){
  
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);
  
 return(
   <div className='side_1' style={{display:"flex",padding:"5px",justifyContent:"center"}}>
    <form style={{width:"300px",height:"350px",lineHeight:"30px",margin:"0 auto"}} noValidate autoComplete="on">
      <p>Sign up/Sign in to get Started</p>
      <div style={{display:"flex",margin:"15px 0",justifyContent:"space-between"}}>
         <p style={{width:"30%"}}>Email:</p>
        <input
          type="text"
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: "12px",
            color: "#1b1b1b",
            backgroundColor:"#e5e5e5",
            border: "none",
            padding: "5px 10px",
            margin: "0 11px",
            outline: "none",
            overflowWrap: "break-word",
            width:"50%",
            flex:1
          }}
        />
      </div>
      <div style={{display:"flex",margin:"15px 0"}}>
        <p style={{width:"30%",fontSize: "15px",}}>Username:</p>
        <input
          type="text"
          //value={username}
          //onChange={(e) => setUsername(e.target.value)}
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: "12px",
            color: "#1b1b1b",
            backgroundColor:"#e5e5e5",
            border: "none",
            //height: "100%",
            padding: "5px 10px",
            margin: "0 11px",
            outline: "none",
            overflowWrap: "break-word",
            width:"50%",
            flex:1
          }}
        />
      </div>
      <div style={{display:"flex",margin:"15px 0"}}>
        <p style={{width:"30%"}}>Password:</p>
        <input
          type="password"
          //value={password}
          //onChange={(e) => setPassword(e.target.value)}
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: "12px",
            color: "#1b1b1b",
            backgroundColor:"#e5e5e5",
            border: "none",
            //height: "100%",
            padding: "5px 10px",
            margin: "0 11px",
            outline: "none",
            overflowWrap: "break-word",
            width:"50%",
            flex:1
          }}
        />
      </div>
      
      <ColorButton
        className="login_submit"
        type="submit"
        //onClick={SignIn}
      >
        SIGN IN
      </ColorButton>
      <p
        style={{
          fontSize: "14px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        By continuing you agree to our Terms & Conditions. See our
        Privacy Notice.
      </p>
    </form>
    </div>
   
 )
}

export default ListingForm;