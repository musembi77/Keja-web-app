import React from 'react'
import Button from '@mui/material/Button';
import {useState} from 'react'
import { styled } from '@mui/material/styles';

function Filter() {
    const[value,setValue]=useState();
    const handleChange = (event)=>{
        console.log(event.target.value);
        setValue(event.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#ffa31a"),
        backgroundColor: "#ffa31a",
        '&:hover': {
          backgroundColor: "#ffa31a",
        },
      }));
    const Services=[
  {
  	title:"Pay Rent",
  },
  {
    title:"Movers",
  },
  {
    title:"Furniture",
  },
  {
    title:"Laundry",
  },
  {
    title:"Wi-fi",
  },
]
    return (
        <div>
            <div style={{
                display:'flex',
                fontSize:'0.8rem',
                color:'grey',
                padding:'5px',
            }}>
                
                <h3>Filter results</h3>
            </div>
            <form>
            	<p style={{fontSize:"0.9rem"}}>Services</p>
			          <div style={{
			            display:"flex",
			            //justifyContent:"space-between",
			            alignItems:"center",
			            textAlign:"center",
			            overflow:"auto",
			            whiteSpace:"nowrap",
			            width:"100%"
			          }} className="scrollbar">
			            {Services.map((item)=>{
			              return(
			                <div> 
			                  <ul style={{
			                    //backgroundColor:"#f79d00",
			                    width:"100%",
			                    textDecoration:"none",
			                    listStyle:"none"
			                  }}>
			                    <button style={{margin:"0 5px",padding:"5px",borderRadius:"10px",border:"1px solid #e5e5e5"}}>
			                      <p>{item.title}</p>
			                    </button>
			                  </ul>
			                  
			                </div>
			              )
			            })}
			          
			      </div>
                <div 
                style={{
                    display:'flex',
                    flexDirection:'column',
                    fontSize:'0.8rem',
                    margin:"10px 0"
                }}
                >
                    <p>Apartment type</p>
                    <select style={{
                        display:'flex',flexDirection:'column',margin:"10px 0",padding:"5px"
                    }}>
                        <option value="single" style={{margin:'5px 0'}}>
                        BedSitter
                        </option>
                        <option value="One Bedroom" style={{margin:'5px 0'}}>
                            One Bedroom
                        </option>
                        <option value="Two Bedroom" style={{margin:'5px 0'}}>
                            Two Bedroom
                        </option>
                        <option value="Three Bedroom" style={{margin:'5px 0'}}>
                            Three Bedroom
                        </option>
                        <option value="single" style={{margin:'5px 0'}}>
                        Hostel
                        </option>
                        <option value="single" style={{margin:'5px 0'}}>
                        Sharing
                        </option>
                    </select>
                    <p>Area</p>
                    <select style={{
                        display:'flex',flexDirection:'column',padding:"5px"
                    }}>
                        <option value="single" style={{margin:'5px 0'}}>
                        Gate A
                        </option>
                        <option value="One Bedroom" style={{margin:'5px 0'}}>
                        Gate B
                        </option>
                        <option value="Two Bedroom" style={{margin:'5px 0'}}>
                        Gate C
                        </option>
                        <option value="Three Bedroom" style={{margin:'5px 0'}}>
                        Gate D
                        </option>
                        <option value="single" style={{margin:'5px 0'}}>
                        Gate E
                        </option>
                        <option value="single" style={{margin:'5px 0'}}>
                        Gachororo
                        </option>
                    </select>
                </div>
                <div>
                    <div style={{
                        fontFamily:'Poppins-regular',
                        justifyContent: 'space-around',
                        fontSize:'0.8rem'
                    }}>
                        <p>Price/month</p>
                        <div style={{display:"flex"}}> 
                        <input type="range" id="vol" name="Price" min="0" max="20000"  onChange={handleChange} style={{width: '80%',color:"#ffa31a",backgroundColor:"#ffa31a"}}/>
                        <p style={{fontSize:"0.7rem",padding:"10px",backgroundColor:"#ffa31a",borderRadius:"5px" }}>Kshs.{value}</p>
                        </div>
                        
                    </div>
                    
                </div>
                
                <div style={{
                    display:'flex',
                    flexDirection: 'column',
                }}>
                    <p>Amenities</p>
                    <div>
                        <input type="checkbox" /><label > Water</label>
                    </div>
                    <div>
                        <input type="checkbox" /><label > Wifi</label>
                    </div>
                    <div>
                        <input type="checkbox" /><label > kitchen</label>
                    </div>
                    <div>
                        <input type="checkbox" /><label > electricity</label>
                    </div>
                    <div>
                        <input type="checkbox" /><label > Security</label>
                    </div>
                </div>
                <div 
                style={{
                    fontFamily:'Poppins-Bold',
                    display:'flex',
                    flexDirection:'column',
                    fontSize:'0.9rem',
                    margin:"10px 0"
                }}
                >

                    <p>Furnishing</p>
                    <select style={{
                        display:'flex',flexDirection:'column',
                    }}>
                        <option value="Furnished" style={{margin:'5px 0'}}>
                        Furnished
                        </option>
                        <option value="UnFurnished"  style={{margin:'5px 0'}}>
                        Unfurnished
                        </option>
                    </select>
                </div>
                <div style={{display:'flex',justifyContent: 'space-around'}}>
                    <ColorButton variant="contained" type='submit' onSubmit={handleSubmit}>Submit</ColorButton>
                    <Button variant="outlined" type='reset'>Reset</Button>
                </div>
            </form>
        </div>
    )
}

export default Filter;