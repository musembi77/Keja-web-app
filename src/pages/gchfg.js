{propertydata.map((property) => (
                            
                          ))}

                          useEffect(()=>{
        console.log(data)
        if(data){
            setPropertydata(data.getallproperties)
        }
    },[data]);

                          {prop.map((property)=>{
                            return(
                                <div>
                                    <Property
                                    property={property}
                                    key={property.id}
                                    />
                                div>
                            )
                        })}
                          {product.map((property)=>{
                            return(
                                {data.property.propertyname}
                                <div>
                                    <Property
                                        property={property}
                                        key={property._id}
                                    />
                                </div>
                            )
                        })}

        if({data}){
            console.log({data})
        }

//const client= useClient();
const [{product},dispatch]=useStateValue([])
        useEffect(()=>{
        get_Property()
    },[])

    const get_Property =  () =>{
        const data = (GET_PROPERTY_QUERY)
        console.log('getting all properties',{data})
    }


    <input
              type="file"
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: "14px",
                color: "#1b1b1b",
                border: "none",
                padding: "5px 0",
                margin: "11px 0",
                outline: "none",
                overflowWrap: "break-word",
              }}

              accept="image/png, image/jpeg,image/jpg"
              onChange={(e)=>{
                setOverviewimage(e.target.files[0])
              }}
            />
            <input
              type="file"
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: "14px",
                color: "#1b1b1b",
                border: "none",
                padding: "5px 0",
                margin: "11px 0",
                outline: "none",
                overflowWrap: "break-word",
              }}

              accept="image/png, image/jpeg,image/jpg"
              onChange={(e)=>{
                setOverviewimage(e.target.files[0])
              }}
            />
            <input
              type="file"
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: "14px",
                color: "#1b1b1b",
                border: "none",
                padding: "5px 0",
                margin: "11px 0",
                outline: "none",
                overflowWrap: "break-word",
              }}

              accept="image/png, image/jpeg,image/jpg"
              onChange={(e)=>{
                setOverviewimage(e.target.files[0])
              }}
            />




            <Skeleton /> :
                                query != null ?
                             data.get_Properties.filter(property => property.propertyname.toString().toLowerCase().includes(query.toLowerCase()|| search.toLowerCase())).map((property)=>{
                                

                                return(
                                    <div>
                                        <Property
                                            property={property}
                                            //key={property.id}
                                        />
                                    </div>
                                )
                            })
                            :
                            data.get_Properties.filter(property => property.propertyname.toString().toLowerCase().includes(query.toLowerCase())).map((property)=>{
                                

                                return(
                                    <div>
                                        <Property
                                            property={property}
                                            //key={property.id}
                                        />

                                    </div>
                                )

                            })

                            <img src="./room6.jpg" style={{width:"100vw",height:"100vh",objectFit:"cover",position:"relative"}} alt="logo"/>


                            //disclaimer
                            https://www.disclaimergenerator.net/live.php?token=CpeDS9UXf58aRLeuCV9SWJnYOUzySQZL

                            <SearchFilter />
                            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/wishlist'>WishList</Link>
                            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/postlisting'>Post an Apartment</Link>
                            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/About/Contact'>About Us</Link>
                        
                        <Link to='/explore' >Explore</Link>
                        <Link to='/' >Features</Link>
                        <Link to='/listwithUs' >List With Us</Link>
                        <Link to='/' >Hire An Agent</Link>

                        <Link to='/About/Contact' >About Us</Link>
                        <Link to='/' >Testimonials</Link>
                        <Link to='/' >Events</Link>

                        <Link to="https://www.privacypolicygenerator.info/live.php?token=KHzPleRJifcjjGtdr7kophQ59Ao9hbHC">Privacy Policy</Link>
                        <Link to="https://www.privacypolicygenerator.info/live.php?token=KHzPleRJifcjjGtdr7kophQ59Ao9hbHC">Disclaimer</Link>
                        <Link to="https://www.privacypolicygenerator.info/live.php?token=KHzPleRJifcjjGtdr7kophQ59Ao9hbHC">Terms&Conditions</Link>
                        <Link to="https://www.privacypolicygenerator.info/live.php?token=KHzPleRJifcjjGtdr7kophQ59Ao9hbHC">Events</Link>
            
            776611

            const pageCount = Math.ceil(pageNumber/propertyPerPage)
const [pageNumber, setPageNumber]=useState(0);
             const getNumber = async()=>{ 
            const pageNumber = await data.get_Properties.length
            console.log(pageNumber)
            }
        getNumber();
            
        console.log(data.get_Properties)

        const number = async()=>{ const pageNumber = await } 
        setPageNumber(pageNumber)
        number()
        <ReactPaginate 
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={Math.ceil(data.get_Properties.length/propertyPerPage)}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName={"paginationBtn"}
                previousLinkClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"previousBtn"}
                activeClassName={"previousBtn"}
            />


            {showreview ?
          <form style={{margin:"0 5px"}} className="Review">
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
          :
          <div style={{display:"flex",alignItems:"center",justifyContent:""}} className="Review">
                  <ColorButton style={{display:"flex",margin:"0 5px",alignItems:"center",fontSize:"13px",width:"150px",}} onClick={HandleReview}>      
              <p>Write a review<CreateIcon style={{fontSize:"0.9rem"}}/></p>
            </ColorButton>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <StarIcon style={{color:"#ffa31a",fontSize:"1.2rem"}}/>
                <p style={{fontFamily:""}}>4.0</p>
                <p style={{fontSize:"0.6rem",color:"grey",margin:"auto 10px"}}>20reviews</p>
              </div>
          </div>
      }

      // {reviews.map((item)=>{
        //   return(
        //     <div>
        //     <Review item={item}/>
        //     </div>
        //   )
          
        // })}

        import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.workerClass = MapboxWorker;


<form 
            style={{
                display:"flex",
                margin:"0",
                height:"40px",
                backgroundColor:"",
                textDecoration:"none",
                position:"absolute",
                top:"40%",
                zIndex:"99"
              }} >
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
              setLocation(e.target.value)
              }}
              >
              <option value="Juja">Juja</option>
            </select>
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
              setArea(e.target.value)
              }}
              >
              <option value="Gate A">Gate A</option>
            <option value="Gate B">Gate B</option>
            <option value="Gachororo">Gachororo</option>
            <option value="Gate C">Gate C</option>
            <option value="Gate D">Gate D</option>
            </select>
            
            <button
                style={{border:"none",color:"#000000",textDecoration:"none",padding:"10px 10px",display:"flex",justifyContent:"center",backgroundColor:"#ffa31a"}}
                type="submit"
                onClick={HandleFilter}
            >
            //<SearchIcon />
            Get Started
            </button>
        </form>

        <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/listwithUs'>List with Us</Link>