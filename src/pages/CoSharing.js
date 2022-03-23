import React,{useState,useEffect}from 'react'
import PropShare from '../components/PropShare'
import CoSharingListingForm from '../components/CoSharingListingForm'
import {useStateValue} from '../components/StateProvider'
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { Alert,Modal} from 'antd';
import {useQuery,} from '@apollo/client';
import {GET_COSHARING_QUERY} from '../GraphQl/Queries.js'
import Skeleton from '../components/Skeleton'

function CoSharing(){
	const navigate = useNavigate()
	const [{ currentUser }] = useStateValue();
	const [formvisible,setFormVisible] =useState(false)
	const [alertvisible,setAlertVisible] =useState(false)

	const PostAd=async()=>{
			try{
				if(currentUser){
					setAlertVisible(true)
					setFormVisible(true)
					setIsModalVisible(true)
				}else{
					await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
					console.log(2);
					navigate("/login")
				}
			}catch(error){
				console.error('dang')
			}
		}
	useEffect(()=>{
		if(currentUser){
			setFormVisible(true)
		}
	},[currentUser])
	const [isModalVisible, setIsModalVisible] = useState(false);
	//querying all ads
	const { loading, data } = useQuery(GET_COSHARING_QUERY);
	const [isloading, setIsLoading]=useState([]);
	
	useEffect(()=>{
		try{
		if(loading){
            setIsLoading(isloading)
        }
		if(data){
			console.log(data.get_CoSharings)
		}
		}catch(error){
			console.error(error)
		}

	},[data,isloading,loading])
	return(
		<div>
			{alertvisible?<Alert
		      message="You are being redirected to the login page "
		      banner
		      closable
		    />
			:null}
			{formvisible?
				<Modal title="Hey, &#128579; Let Us Help You Find a roommate"
		          visible={isModalVisible}
		          onOk={() => {
		            setIsModalVisible(true);
		          }}
		          onCancel={() => {
		            setIsModalVisible(true);
		            setFormVisible(false)
		          }}>
					<CoSharingListingForm />
				</Modal>
				:null
			}
			<div style={{display:"flex",flexDirection:"column",backgroundColor:"#e5e5e5",padding:'10px',margin:"10px 0",borderRadius:"5px"}}>
        <h3 style={{fontFamily:"Poppins-bold",margin:"0"}}>Try Hosting</h3>
        <p>Looking for a roommate ?</p>
        <Button onClick={PostAd} style={{backgroundColor:"#ffa31a",color:"#fff",width:"150px",padding:"5px",borderRadius:"5px",margin:"5px 0"}} >
            Host a roommate
        </Button>
        

      </div>
      		{isloading? 
				 <Skeleton /> :
	                                data.get_CoSharings
	                                .map((item)=>{
	                                    return(
	                                        <div>
	                                            <PropShare 
													item={item}
													key={item.id}
												/>
	                                        </div>
	                                    )
	                                })
	                            }
	  /    }
		</div>
	)
}

export default CoSharing;

