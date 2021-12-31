import React,{useState} from 'react'
import {Link } from "react-router-dom"
import {Room,
        Star,
        Call,
        Facebook,
        Instagram,
        WhatsApp,
        FavoriteBorder,
        Favorite,
        Create,
        NavigateNext
} from '@mui/icons-material'
import LinkIcon from '@mui/icons-material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useStateValue } from "../components/StateProvider";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Review from '../components/Review.js'

function PropertyView(){
  const [{ product,}] = useStateValue('');
  
  return(
    <div>
      {product.map((property)=>{
          return(
            <ViewDetails
                key={property.id}
                id={property.id}
                mainimage={property.mainimage}
                overviewimage={property.overviewimage}
                propertyname={property.propertyname}
                price={property.price}
                location={property.location}
                stats={property.stats}
                description={property.description}
                amenities={property.amenities}
                overview={property.overview}
                reviews={property.reviews}
                vacancy={property.vacancy}
          />
          )
      })}
    </div>
  )
}

export default PropertyView;

const ViewDetails=({
            id,
            mainimage,
            propertyname,
            price,
            location,
            stats,
            description,
            amenities,
            overviewimage,
            vacancy,
            reviews,
          }
            
)=>{
  //console.log(reviews)
  const [{currentUser}]=useStateValue();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#ffa31a"),
    backgroundColor: "#ffa31a",
    '&:hover': {
      backgroundColor: "#ffa31a",
    },
  }));
  const [dispatch] = useStateValue('')
  
  const [showcontact,setShowContact]=useState();
  const HandleContact = () =>{
    setShowContact(true)
  }

  const[like,setLike]=useState();
  const HandleLike=()=>{
    setLike(!like);
  }
  
  const HandleShowAllReview=()=>{
    // console.log("show all reviews")
    // console.log("dispatch fired");
    // console.log(showreviews);
    dispatch({
        type: "SHOW_ALL_REVIEWS",
        showreviews: {
          id:id,
          reviews:reviews,
        },
      });
  }
  return(
    <div style={{position:"relative"}}>
    {
      //Image
    }
    <div style={{position:"  relative",cursor:"pointer"}}>
      <img src={mainimage} alt="logo" style={{width:"100%",height:"50vh",objectFit:"cover"}}/>
      <div onClick={HandleLike} style={{width:"30px",height:"30px",backgroundColor:"#e5e5e5",borderRadius:"100px",textAlign:"center",position:"absolute",top:"10px",right:"10px"}}>
      {like ? 
        <Favorite style={{fontSize:"1.2rem",margin:"6px auto",color:"#ffa31a"}}/>
        :
        <FavoriteBorder style={{fontSize:"1.2rem",margin:"6px auto"}}/>}
      </div>
    </div>
    {
      //Information
    }
    <div style={{padding:"8px",fontSize:"0.99rem",color:"#000000"}}>
      <h3 style={{fontFamily:"Poppins-Bold",fontSize:"1.6rem"}}>{propertyname}</h3>
      <h4 style={{fontFamily:"Poppins-Bold",}}> {price} <span style={{color:"grey"}}>/ Month</span></h4>
      <div style={{display:'flex',color:"grey",}}>
        <Room style={{fontSize:"1.4rem",color:"#ffa31a"}}/>
        <p>{location}</p>
      </div>
      <div style={{color:"",display:"flex",width:"80px",fontSize:"1rem",margin:"5px 0"}}>
        <p>Vacancy:<span style={{color:"#ffa31a",margin:"0 5px"}}>{vacancy}</span></p>
      </div>
      {
        //share
      }
      <div style={{display:"flex",}}>
        <p>Share :</p>
        <Link to='' style={{margin:"0 5px"}}><WhatsApp style={{fontSize:"1.3rem",color:"#25D366"}}/></Link>
        <Link to='' style={{margin:"0 5px"}}><Facebook style={{fontSize:"1.3rem",color:"#1877f2"}}/></Link>
        <Link to='' style={{margin:"0 5px"}}><Instagram style={{fontSize:"1.3rem",color:"#DD2A7B"}}/></Link>
        <Link to='' style={{margin:"0 5px"}}><LinkIcon style={{fontSize:"1.3rem",color:"#000000"}}/></Link>
      </div>
      {
        //Ratings
      }
      <div >
      {
        //Description
      }
      <div>
        <h4 >Description</h4>
        <p style={{color:"grey"}}>{description}</p>
      </div>
      {
        //Amenities
      }
      <div style={{color:"grey"}}>
        <h4 style={{color:"#000000"}}>Amenities</h4>
        <p>{amenities}</p>
      </div>
      {
        //Policies
      }
      <div style={{color:"grey"}}>
        <h4 style={{color:"#000000"}}>Policies</h4>
        <p>{amenities}</p>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        <img src={overviewimage} alt="logo" style={{width:"150px",height:"120px",objectFit:"cover",borderRadius:"10px",margin:"5px 10px"}}/>
        <img src={overviewimage} alt="logo" style={{width:"150px",height:"120px",objectFit:"cover",borderRadius:"10px",margin:"5px 10px"}}/>
        <img src={overviewimage} alt="logo" style={{width:"150px",height:"120px",objectFit:"cover",borderRadius:"10px",margin:"5px 10px"}}/>
        <img src={overviewimage} alt="logo" style={{width:"150px",height:"120px",objectFit:"cover",borderRadius:"10px",margin:"5px 10px"}}/>
      </div>
        {
          //Review
        }
        <div style={{backgroundColor:"#e5e5e5",padding:"5px",borderRadius:"5px"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h4 style={{color:"#000000"}}>Reviews</h4>
              {
                currentUser?(<Link to="/reviews" style={{margin:"0px 10px",fontSize:"13px",color:"#000000",textDecoration:"none"}} onClick={HandleShowAllReview}>Show All <NavigateNext style={{fontSize:"0.9rem",paddingTop:"2px"}}/></Link>)
                :
                (<p style={{fontSize:"0.8rem"}}><Link to="/login">Log in</Link> to see all reviews</p>)
              }
              
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Star style={{color:"#ffa31a",fontSize:"1.2rem"}}/>
                <p style={{fontFamily:""}}>4.0</p>
                <p style={{fontSize:"0.6rem",color:"grey",margin:"auto 10px"}}>reviews</p>
              </div>
              <Link to="/reviews" style={{display:"flex",margin:"0",alignItems:"center",fontSize:"13px",textDecoration:"none",color:"#ffa31a"}} >      
                  Write a review<Create style={{fontSize:"0.8rem",color:"#000000"}}/>
              </Link>
            </div>        
          </div>
          {reviews.map((item)=>{
          return(
            <div>
              <Review item={item}/>
            </div>
          )
          })}
        {
          //Contacts
        }
        {showcontact ? (
          <div style={{display:"flex",flexDirection:"column"}}>
          <h4>Contacts</h4>
          <div style={{display:"flex",flexDirection:"column",margin:"10px 0",borderRadius:"10px",padding:"10px",backgroundColor:"#eeeeee"}}>
                <div style={{display:"flex"}}>
                  <img src='./Keja.jpg' alt="logo" style={{margin:"0 5px",fontSize:"2rem",width:"30px",height:"30px",borderRadius:"100px"}}/>
                  <p style={{fontSize:"0.9rem"}}>Keja Agent</p>
                </div>
                <div style={{display:"flex",margin:"0 5px",alignItems:"",fontSize:"13px",flexDirection:"column"}}>
                    <div style={{alignItems:"center",textDecoration:"none",backgroundColor:"#ffa31a",width:"110px",padding:"5px",borderRadius:"5px",margin:"5px 0"}}>
                      <Call style={{fontSize:"1rem"}}/>
                      <a href = "https://wa.link/nv8tti" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      0771712005</a>
                    </div>
                    <div style={{alignItems:"center",textDecoration:"none",backgroundColor:"#ffa31a",width:"110px",padding:"5px",borderRadius:"5px"}}>
                      <WhatsAppIcon style={{fontSize:"1rem",margin:"0 5px"}} />
                      <a href = "https://wa.link/nv8tti" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      0771712005</a>
                    </div>
                    
                </div>
              </div>
        </div>
        ):
        (
          <ColorButton style={{display:"flex",margin:"10px 5px",alignItems:"center",fontSize:"13px",width:"100%",}} onClick={HandleContact}>      
            <p>Check Availability</p>
          </ColorButton>
        )
      }
        
      </div>
    </div>
  </div>
  )
}
