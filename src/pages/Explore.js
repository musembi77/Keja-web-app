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
import { Alert } from 'antd';

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
    const [active]=useState('setactive')

    const [visible, setVisible] = useState(true);
    const [alertMessage, setAlertMessage] = useState('price is the default search option')
    const handleClose = () => {
        setVisible(false);
    };
//const searchoption = 'area'
//console.log(searchoption)
    return (
        <div style={{width:"100%",position:"relative",height:""}}>
        {visible ? (
        <Alert message={alertMessage} type="info" showIcon closable afterClose={handleClose} />
        ) : null}
        <div style={{cursor:"pointer",width:"90%",margin:"0 auto",backgroundColor:"#eeeeee",padding:"10px",borderRadius:"5px",}}>
        <div style={{display:"flex",alignItems:"center",margin:"10px 0",justifyContent:"space-around",}}>
            <button  className={active} onClick={(e)=>{
                  setSearchOption("propertyname")
                  setVisible(true)
                  setAlertMessage('You are now searching by propertyname option')
                  }}>Property Name</button>
            <button   className={active} onClick={(e)=>{
                  setSearchOption("price")
                  setVisible(true)
                  setAlertMessage('You are now searching by price option')
                  }}>Price</button>
            <button  className={active} onClick={(e)=>{
                  setSearchOption("area")
                  setVisible(true)
                  setAlertMessage('You are now searching by Area option')
                  }}>Area</button>
            <button className={active} onClick={(e)=>{
                  setSearchOption("type")
                  setVisible(true)
                  setAlertMessage('You are now searching by Propertytype option')
                  }}>Property type</button>
        </div>
        <div style={{display:"flex",justifyContent:"center",margin:"0 10%",alignItems:"center"}}>
                <input 
                    placeholder="Search by name, property type, price"
                    style={{
                        fontSize:'0.9rem',
                        outline:'none',
                        padding:'7px',
                        border:'none',
                        borderRadius:"5px",
                        height:'100%',
                        width:'80%',
                        overflowWrap:'break-word',
                        backgroundColor:"#e5e5e5"
                    }}
                    onChange={(e)=>setQuery(e.target.value)}
                />
                <SearchIcon style={{color:"#000"}}/>
            </div >
        </div>
            
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