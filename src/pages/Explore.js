/* eslint-disable array-callback-return */
import React,{useEffect,useState} from 'react'
import Property from '../components/Property'
import {useQuery,} from '@apollo/client';
import {GET_PROPERTY_QUERY} from '../GraphQl/Queries.js'
import Skeleton from '../components/Skeleton'
import SearchIcon from '@mui/icons-material/Search';
import ReactPaginate from 'react-paginate';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Footer from '../components/Footer'

function Explore() {
    const [isloading, setIsLoading]=useState([]);
    const [query, setQuery]=useState('');
    const { loading, data } = useQuery(GET_PROPERTY_QUERY);

    const [pageNumber, setPageNumber]=useState(0)
    const propertyPerPage= 10;
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
    //console.log(number)
    const pageCount = Math.ceil(number/propertyPerPage)
    //console.log(pageCount)
    const handlePageClick = ({selected})=>{
        setPageNumber(selected)
    }
const [searchoption, setSearchOption]=useState('price')
//const searchoption = 'area'
//console.log(searchoption)
    return (
        <div style={{width:"100%",position:"relative",height:""}}>
        <div style={{display:"flex",alignItems:"center",backgroundColor:"#eeeeee",margin:"10px 0",justifyContent:"space-between"}}>
            <p style={{fontSize:"0.7rem",padding:"0 10px"}}>Select option to search by:</p>
            <select 
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: "14px",
                    color: "#1b1b1b",
                    border: "none",
                    height: "100%",
                    padding: "5px 10px",
                    outline: "none",
                    overflowWrap: "break-word",
                    flex:0.7
                  }}
                  onChange={(e)=>{
                  setSearchOption(e.target.value)
                  }}
                  >
                    <option value="propertyname">Name</option>
                    <option value="price">Price</option>
                    <option value="area">Area</option>
                    <option value="type">Property type</option>
                </select>
        </div>
        
            <div style={{display:"flex",justifyContent:"center",margin:"0 10%",alignItems:"center"}}>
                <input 
                    placeholder="Search Apartment by ..."
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
            }} >
                <div style={{display:"flex",
                    flexWrap:"wrap",justifyContent:"space-around", height:"80vh",
                overflow:"auto",
            whiteSpace:"nowrap",   }} className="scrollbar">
                    {isloading && !data? 
                            <Skeleton /> :
                                data.get_Properties
                                .filter(property => 
                                    {
                                        if(searchoption === 'price')
                                    { 
                                        return (property.price.toString().toLowerCase().includes(query.toLowerCase()));
                                    }
                                    else if(searchoption === 'propertyname'){
                                        return (property.propertyname.toString().toLowerCase().includes(query.toLowerCase()));
                                    }
                                    else if(searchoption === 'area'){
                                        return (property.area.toString().toLowerCase().includes(query.toLowerCase()));
                                    }
                                    else if(searchoption === "type"){
                                        return (property.type.toString().toLowerCase().includes(query.toLowerCase()));
                                    }
                                })
                                .slice(pagesVisted, pagesVisted + propertyPerPage)
                                .map((property)=>{
                                    return(
                                        <div>
                                            <Property
                                                property={property}
                                                key={property._id}
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
                <Footer />
        </div>
    )
}
export default Explore;