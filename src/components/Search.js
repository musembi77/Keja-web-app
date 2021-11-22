import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import Button from '@mui/material/Button';
import {useState} from 'react'
import { styled } from '@mui/material/styles';

function Search() {
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
    return (
        <div>
            <div 
                style={{
                    display: 'flex',
                    borderRadius:'999px',
                    //border:'1px solid grey',
                    padding:'1px 4px',
                    alignItems:'center',
                }}>
                <SearchIcon />
                <input 
                    placeholder='Search Apartment'
                    style={{
                        fontSize:'0.9rem',
                        outline:'none',
                        border:'none',
                        height:'100%',
                        width:'100%',
                        overflowWrap:'break-word',
                        backgroundColour:"grey"
                    }}
                />
            </div>
            <div style={{
                display:'flex',
                fontSize:'0.8rem',
                color:'grey',
                padding:'5px',
            }}>
                <AlignHorizontalLeftIcon />
                <h3>Filter results</h3>
            </div>
            <form>
                <div 
                style={{
                    display:'flex',
                    flexDirection:'column',
                    fontSize:'0.8rem'
                }}
                >
                    <p>Apartment type</p>
                    <div style={{
                        display:'flex',flexDirection:'column',
                    }}>
                        <ColorButton variant="outlined" href="#single" style={{margin:'5px 0'}}>
                        Single
                        </ColorButton>
                        <ColorButton variant="outlined" href="#One Bedroom" style={{margin:'5px 0'}}>
                            One Bedroom
                        </ColorButton>
                        <ColorButton variant="outlined" href="#Two Bedroom" style={{margin:'5px 0'}}>
                            Two Bedroom
                        </ColorButton>
                        <ColorButton variant="outlined" href="#Three Bedroom" style={{margin:'5px 0'}}>
                            Three Bedroom
                        </ColorButton>
                    </div>
                </div>
                <div 
                style={{
                    //fontFamily:'Poppins-Bold',
                    display:'flex',
                    flexDirection:'column',
                    fontSize:'0.9rem',
                    margin:'10px 0'
                }}
                >
                    <p>Furnishing</p>
                    <div style={{
                        display:'flex',flexDirection:'column',
                    }}>
                        <Button variant="outlined" href="#furnished" style={{margin:'5px 0'}}>
                        Furnished
                        </Button>
                        <Button variant="outlined" href="#Unfurnished"  style={{margin:'5px 0'}}>
                        Unfurnished
                        </Button>
                    </div>
                </div>
                <div>
                    <div style={{
                        display:'flex',
                        //fontFamily:'Poppins-regular',
                        justifyContent: 'space-around',
                        fontSize:'0.8rem'
                    }}>
                        <p>Price monthly</p>
                        <p>Kshs.{value}</p>
                    </div>
                    <input type="range" id="vol" name="Price" min="0" max="20000" default='6500' onChange={handleChange} style={{width: '100%',color:"#ffa31a"}}/>
                </div>
                <div style={{
                    display:'flex',
                    flexDirection: 'column',
                    padding:'10px 0',
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
                </div>
                <div style={{display:'flex',justifyContent: 'space-around'}}>
                    <ColorButton variant="contained" type='submit' onSubmit={handleSubmit}>Submit</ColorButton>
                    <Button variant="outlined" type='reset'>Reset</Button>
                </div>
            </form>
        </div>
    )
}

export default Search;

