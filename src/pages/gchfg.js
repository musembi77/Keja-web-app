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
            
            