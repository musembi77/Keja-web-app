import React,{useEffect,useState} from 'react'
import Property from '../components/Property'
import {useQuery,} from '@apollo/client';
import {GET_PROPERTY_QUERY} from '../GraphQl/Queries.js'
import Skeleton from '../components/Skeleton'
import SearchIcon from '@mui/icons-material/Search';
import ReactPaginate from 'react-paginate';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {Location} from '../components/dummydata.js'

function Explore() {
    const [isloading, setIsLoading]=useState([]);
    const [query, setQuery]=useState('');
    const { loading, data } = useQuery(GET_PROPERTY_QUERY);

    const [pageNumber, setPageNumber]=useState(0)
    const propertyPerPage= 6;
    const pagesVisted = pageNumber * propertyPerPage;

    
    const [number,setNumber]=useState('')
    useEffect(()=>{
        if(loading){
            setIsLoading(isloading)
        }
        if(data){
            //console.log(data.get_Properties.length)
            setNumber(data.get_Properties.length)
            //console.log(...data.get_Properties);
        }
    },[data,isloading,loading]);
    console.log(number)
    const pageCount = Math.ceil(number/propertyPerPage)
    //console.log(pageCount)
    const handlePageClick = ({selected})=>{
        setPageNumber(selected)
    }
    
const [searchoption, setSearchOption]=useState('')

console.log(searchoption)
    return (
        <div style={{width:"100%",position:"relative",height:"100vh"}}>
            <div style={{display:'flex',}}>
                <p style={{width:"25%",fontSize:"0.7rem"}}>Select option to search by:</p>
                
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
                    backgroundColor:"#e5e5e5",
                    width:"100px",
                    margin:"0 10px",
                    textDecoration:"none",
                    listStyle:"none",
                    
                  }}>
                    <li >
                      <div style={{                      
                        fontSize:"0.9rem",
                        fontFamily:"Poppins-Regular",
                        textDecoration:"none",
                        color:"#000000",
                        backgroundColor:"",
                      }}
                      value={item.value}
                      onClick={(e)=>{
                          setSearchOption(e.target.value)
                        }}
                      >
                      {item.title}
                      </div>
                    </li>
                  </ul>
                  
                </div>
              )
            })}
          </div>
            
            </div>
            <div style={{display:"flex",justifyContent:"center",margin:"0 10%",alignItems:"center"}}>
                <input 
                    placeholder='Search {}'
                    style={{
                        fontSize:'0.9rem',
                        outline:'none',
                        padding:'7px',
                        border:'none',
                        borderRadius:"999px",
                        height:'100%',
                        width:'80%',
                        overflowWrap:'break-word',
                        backgroundColor:"#e5e5e5"
                    }}
                    onChange={(e)=>setQuery(e.target.value)}
                />
                <SearchIcon />
            </div >    
            <div style={{
                width:'100vw',
                backgroundColor:'#ffffff',
                textDecoration:"none",
                color:"#000000",
                padding:"10px",
                position:"static"                          
            }} >
                <div style={{display:"flex",
                    flexWrap:"wrap",justifyContent:"space-around",height:"100%"   }}>
                    {isloading && !data? 
                            <Skeleton /> :
                                data.get_Properties
                                .filter(property => (property.propertyname.toString().toLowerCase().includes(query.toLowerCase())))
                                .slice(pagesVisted, pagesVisted + propertyPerPage)
                                .map((property)=>{
                                    return(
                                        <div>
                                            <Property
                                                property={property}
                                                key={property.id}
                                            />
                                        </div>
                                    )
                                })
                        }
                    
                        </div>
                    <ReactPaginate 
                        breakLabel="..."
                        nextLabel=<NavigateNextIcon style={{fontSize:"1rem",border:"1px solid #ffa31a",borderRadius:"99px",marginLeft:"-10px",marginTop:"-2px"}}/>
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel=<NavigateBeforeIcon style={{fontSize:"1rem",border:"1px solid #ffa31a",borderRadius:"99px",marginRight:"-10px",marginTop:"-2px"}}/>
                        renderOnZeroPageCount={null}
                        containerClassName={"paginationbtns"}
                        previousLinkClassName={"previousbtns"}
                        nextLinkClassName={"nextbtns"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div> 
        </div>
    )
}

export default Explore;