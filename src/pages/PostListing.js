import React,{useState} from 'react';
import { Button, withStyles } from "@material-ui/core";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function PostListing (){
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);
  const [showform,setShowForm]=useState();
  const handleShowForm=()=>{
    setShowForm(!showform);
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
        <div style={{backgroundColor:"#000000"}}>
        <img src="./Keja (3).png" style={{width:"100%",height:"100%",objectFit:"contain",position:"relative"}}/>
        <ColorButton
          onClick={handleShowForm}
          style={{margin:"",width:"200px",position:"",bottom:"",right:"",color:"#ffffff"}}
        >
          Get Started<ArrowRightAltIcon />
        </ColorButton>
      </div>
      )}
    </div>
  )
}

export default PostListing;

// eslint-disable-next-line no-lone-blocks
{//  What i need to be in this Form
//  Image of the Flat(Image1)
//  Name Of the Flat(Title)
//  Images of the Rentals(image2)
//  Amount per month of the Rentals(Price)
//  Location of the House(Address)
//  Description(Description)
//  Amenities Available(details)

//  Name of the Owner(Name)
//  Contact of the Owner/Landlord/Caretaker/Agent(Contact)
}

const Form=()=>{
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText("#ffa31a"),
      backgroundColor: "#ffa31a",
    },
  }))(Button);
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
            }}>
            <option value="Gate A">Gate A</option>
            <option value="Gate B">Gate B</option>
            <option value="Gate C">Gate C</option>
            <option value="Gate D">Gate D</option>
          </select>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Amenities:</p>
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
            }}/>
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
              padding: "5px 10px",
              margin: "11px",
              outline: "none",
              overflowWrap: "break-word",
              flex:0.7
            }}
            accept="image/png, image/jpeg,image/jpg"
          />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
          <p style={{width:"20%"}}>Images</p>
          <input
            type="file"
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
            accept="image/png, image/jpeg,image/jpg"
            multiple
          />
        </div>
        
        <ColorButton
          type="submit"
          style={{margin:"20px 30%",width:"40%"}}
        >
          submit
        </ColorButton>
    </form>
  )
}