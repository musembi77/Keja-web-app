import React,{useState,useEffect} from 'react';
import ContentSlider from '../components/ContentSlider.js';
import MapIcon from '@mui/icons-material/Map';
import Map from '../components/Map.js'
import CloseIcon from '@mui/icons-material/Close';
import Skeleton from '../components/Skeleton'
import {useQuery,} from '@apollo/client';
import {GET_PROPERTY_QUERY} from '../GraphQl/Queries.js'
import Footer from '../components/Footer'
import {Link } from "react-router-dom"
import 'antd/dist/antd.css'
import { Carousel } from "antd";

function Home({property}){
  const [showmap,setShowMap]=useState('')
  const HandleMap=()=>{
    setShowMap(!showmap)
  }

  const [isloading, setIsLoading]=useState([]);

  const { loading, data,} = useQuery(GET_PROPERTY_QUERY);

  const [pageNumber, setPageNumber]=useState(0)
    const propertyPerPage= 4;
    const pagesVisted = pageNumber * propertyPerPage;
    useEffect(()=>{
        if(loading){
            setIsLoading(isloading)
        }
        if(data){
            
            setPageNumber('')
        }
    },[data,isloading,loading]);
    const [query]=useState('shop');
    const contentStyle = {
      color: "#000",
      //lineHeight: "160px",
      textAlign: "center",
      background: "#ffa31a",
      width: "calc(100vw)",
      height:"",
      objectFit:"cover"
    };

  return(
    <div style={{backgroundColor:"#eeeeee"}}>
      <Carousel autoplay>
        <div className='imageLarge'>
          <img src='./banner3.png' alt='banner' style={contentStyle} />
        </div>
        <Link to='/support' style={{position:"relative"}}>
          <img src='./support.jpg' alt='banner' style={contentStyle}/>
          <p style={{fontSize:"1.3rem",position:"absolute",top:"40%",
                zIndex:"99",margin:"auto",fontFamily:"Poppins-bold",color:"#ffffff"}}>Get Gas Delivery around juja</p>
                <p style={{fontSize:"1.5rem",position:"absolute",top:"55%",
                zIndex:"99",margin:"auto",fontFamily:"Poppins-bold",color:"#000"}}>Contact Us <span style={{fontSize:"1rem"}}>0771712005</span></p>
        </Link>
        <Link to='/exploreservices' style={{position:"relative"}}>
          <img src='./gas.jpeg' alt='banner' style={contentStyle}/>
        </Link>
      </Carousel>

      <div style={{padding:"5px"}}>
      {
        //map
      }
      <div style={{width:"99vw",objectFit:"contain"}}>
        
        {showmap?
          <> 
          <CloseIcon onClick={HandleMap}/>
          <Map />
          </>:
          <div style={{backgroundColor:"#eee",display:"flex",margin:"10px 0px",alignItems:"center"}}>
            <MapIcon onClick={HandleMap} style={{backgroundColor:"#ffa31a",borderRadius:"99px",padding:"3px",margin:"0 5px"}}/>
            <div style={{backgroundColor:""}}>
              <p style={{fontSize:"0.8rem",fontFamily:"Poppins-Bold"}}>Show Map</p>
              <p style={{fontSize:"0.6rem"}}><span style={{color:"#ffa31a",fontSize:"0.7rem"}}>! </span>This feature will require your current location</p>
            </div>
            
          </div>
        }
        
        
      </div>
      
      {
        //Featured / Recommended
      } 
      <div>
      <div style={{display:"flex",justifyContent:"space-between",padding:'0 5px'}}>
      <p>Homes</p>
      <Link to='/explore' style={{textDecoration:"none",color:"#ffa31a"}}>See all</Link>
      </div>
        <div style={{
          display:"flex",
          //justifyContent:"space-between",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"100%",
          margin:"5px",
          //padding:"10px",
        }} className="scrollbar">
          {isloading && !data? 
                            <Skeleton /> :
                                data.get_Properties
                                .slice(pagesVisted, pagesVisted + propertyPerPage)
                                .map((property)=>{
                                    return(
                                        <div>
                                            <ContentSlider
                    property={property}
                    />
                                        </div>
                                    )
                                })
                        }
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",backgroundColor:"#fff",padding:'10px',margin:"10px 0",borderRadius:"5px"}}>
        <h3 style={{fontFamily:"Poppins-bold",margin:"0"}}>Try Hosting</h3>
        <p>List a Home/Apartment</p>
        <Link to='/listwithus'style={{backgroundColor:"#000",color:"#fff",width:"150px",padding:"5px",borderRadius:"5px",margin:"5px 0"}} >
            Become a Host
        </Link>
        <img src='./listad3.jpeg' alt='img' style={{objectFit:"fit",width:"",height:""}}/>
      </div>     
      {
        //NewBuildings
      }
      <div>
      <div style={{display:"flex",justifyContent:"space-between",padding:'0 5px'}}>
      <p>Shops</p>
      <Link to='/explore' style={{textDecoration:"none",color:"#ffa31a"}}>See all</Link>
      </div>
        
        <div style={{
          display:"flex",
          //justifyContent:"space-between",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"100%",
          margin:"5px",
          //padding:"10px",
        }} className="scrollbar">
          {isloading && !data? 
                            <Skeleton /> :
                                data.get_Properties
                                .slice(pagesVisted, pagesVisted + propertyPerPage)
                                .filter(property => property.type.toString().toLowerCase().includes(query.toLowerCase()))
                                .map((property)=>{
                                    return(
                                        <div>
                                            <ContentSlider
                    property={property}
                    />
                                        </div>
                                    )
                                })
                        }
        </div>
      </div>           
      </div>
      <Footer />
    </div>
  )
}

export default Home