import React,{useState,useEffect} from 'react'
import "antd/dist/antd.css";
import { Modal} from 'antd';
import { useNavigate } from 'react-router-dom';

function LogInPopUp ({onClick}){
	const navigate = useNavigate();
	const [isModalVisible, setIsModalVisible] = useState(true);
	const HandleLogin=()=>{
		navigate('/login')
		console.log('sucks')
		setIsModalVisible(false)
	}	
	useEffect(()=>{
		if(window.location.pathname === '/login' || window.location.pathname === '/' ){
			setIsModalVisible(false)
		}
	},[])
	return(
		<div>
		<Modal title=" We noticed you are not logged In."
          visible={isModalVisible}
          onOk={HandleLogin}
          onCancel={() => {
            setIsModalVisible(false);
          }}>
          <p> To continue enjoying the experience you need to Sign In</p>
  
        </Modal>
        </div>
	)
}

export default LogInPopUp;