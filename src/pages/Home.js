import React,{useState,useEffect} from 'react';
import {Link } from "react-router-dom"
import {Location} from '../components/dummydata.js'
import ContentSlider from '../components/ContentSlider.js';
import MapIcon from '@mui/icons-material/Map';
import Map from '../components/Map.js'
import CloseIcon from '@mui/icons-material/Close';
import Skeleton from '../components/Skeleton'
import {useQuery,} from '@apollo/client';
import {GET_PROPERTY_QUERY,GET_SERVICE_QUERY} from '../GraphQl/Queries.js'

function Home({property}){
  const [showmap,setShowMap]=useState('')
  const HandleMap=()=>{
    setShowMap(!showmap)
  }
  const [isloading, setIsLoading]=useState([]);
  const { loading, data } = useQuery(GET_PROPERTY_QUERY,GET_SERVICE_QUERY);

  const [pageNumber, setPageNumber]=useState(0)
    const propertyPerPage= 4;
    const pagesVisted = pageNumber * propertyPerPage;
    useEffect(()=>{
        if(loading){
            setIsLoading(isloading)
        }
        if(data){
            console.log(data.get_Services)
            setPageNumber('')
        }
    },[data,isloading,loading]);
  return(
    <div style={{backgroundColor:"#eeeeee"}}>
      
      <div style={{padding:"5px"}}>
      {
        //Communities
      } 
      <div >
        <p>Communities</p>
          <div style={{
            display:"flex",
            //justifyContent:"space-between",
            alignItems:"center",
            textAlign:"center",
            overflow:"auto",
            whiteSpace:"nowrap",
            width:"100%",

          }} className="scrollbar">
            {Location.map((item)=>{
              return(
                <div> 
                  <ul style={{
                    backgroundColor:"#fff",
                    width:"100px",
                    marginRight:"5px",
                    textDecoration:"none",
                    listStyle:"none",
                    
                  }}>
                    <li >
                      <Link style={{                      
                        fontSize:"0.9rem",
                        fontFamily:"Poppins-Regular",
                        textDecoration:"none",
                        color:"#000000",
                        backgroundColor:"",
                      }} to='/explore'>
                      {item.title}
                      </Link>
                    </li>
                  </ul>
                  
                </div>
              )
            })}
          </div>
      </div>
      <div style={{width:"100vw",objectFit:"contain"}}>
        
        {showmap?
          <> 
          <CloseIcon onClick={HandleMap}/>
          <Map />
          </>:
          <div style={{height:"",backgroundColor:"#eee",display:"flex",margin:"10px 5px",alignItems:"center"}}>
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
        <p>Homes</p>
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
      {
        //NewBuildings
      }
      <div>
        <p>Featured</p>
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
                                .reverse()
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
    </div>
  )
}

export default Home