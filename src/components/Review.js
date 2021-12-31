import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useStateValue} from "./StateProvider"

function Review({item}){
  const [{currentUser}]=useStateValue();
	return(
		<div className="Review">
			<div style={{
                        display:"flex",
                        flexDirection:"column",
                        width:"",
                        height:"",
                        padding:"5px",
                        fontSize:"0.9rem",
                        fontFamily:"Poppins-regular",
                        textAlign:"",
                        margin:" 5px 8px",
                        backgroundColor:"#eeeeee",
                        borderRadius:"10px",

                      }}>
                        <div style={{display:"flex"}}>
                          {currentUser ? 
                              <img src={item.author.picture} alt='pp' style={{width:"20px",height:"20px",borderRadius:"2px"}}/>
                              :
                              <AccountCircleIcon style={{fontSize:"2rem"}}/>
                          }
                          <div style={{fontSize:"0.7rem",marginLeft:"5px",display:"flex",flexDirection:"column"}}>
                            <p style={{color:"#000000"}}>{item.author.name}</p>
                            {
                              //<p>{item.createdAt}</p>
                            }
                          </div>
                        </div>
                        <div style={{backgroundColor:"",height:"",borderTop:"1px solid grey"}}>
                          <p style={{color:"",fontSize:"0.7rem",overflowWrap:"break-word"}}>{item.review}</p>
                        </div>
                        <p style={{fontSize:"0.5rem",color:"grey"}}>This review is entirely subject personal opinions of Keja.app consumers.These opinions do not necessarily represent the views of Keja.com</p>
                    </div>
		</div>
	)
}
export default Review