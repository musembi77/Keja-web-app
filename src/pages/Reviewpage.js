import React,{useState} from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {CREATE_REVIEW_MUTATION} from '../GraphQl/Mutations.js'
import {useClient} from '../Client.js'
import { useStateValue } from "../components/StateProvider";
import Review from '../components/Review.js'

function Reviewpage(){
  const client = useClient()

  const [{ showreviews},] = useStateValue('');
  const[propertyId,setPropertyId]=useState('')
   const [review,setReview]=useState('')
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#ffa31a"),
    backgroundColor: "#ffa31a",
    '&:hover': {
      backgroundColor: "#ffa31a",
    },
  }));

  const HandleSubmitReview=async()=>{
    setPropertyId(showreviews.id)
    const variables = {
      propertyId,
      review}
    const {createReview} = await client.request(CREATE_REVIEW_MUTATION,variables)
    console.log('Property Created',{createReview})
  }
	return(
		<div style={{height:"60vh"}}>
    <form style={{margin:"0 0px"}} className="Review">
              <p style={{fontSize:"small"}}>Highlight Your Experience</p>
              <textarea 
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: "14px",
                      color: "#1b1b1b",
                      border: "",
                      width:" 100%",
                      height: "100px",
                      padding: "5px 10px",
                      margin: "0",
                      overflowWrap: "break-word",
                      flex:0.7
                    }}
                    type="text"
                    maxLength="200"
                    onChange={e=>setReview(e.target.value)}
                    value={review}
                />
          <ColorButton style={{display:"flex",margin:"0",alignItems:"center",fontSize:"13px",width:"",}} onClick={HandleSubmitReview}>      
            <p>Submit</p>
          </ColorButton>
        </form>
    {showreviews.reviews.length === 0 ?(
        <p style={{fontSize:"0.8rem"}}>We have no Reviews For this apartment yet</p>
      ):(
          showreviews.reviews.map((item)=>{
          return(
            <div>
              <Review item={item}/>
            </div>
          )
          
        }) 
      )}
           
		</div>
	)
}

export default Reviewpage;