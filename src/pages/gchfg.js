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