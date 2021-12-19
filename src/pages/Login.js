import React from "react";
import {GoogleLogin} from "react-google-login"
import {GoogleLogout} from "react-google-login"
import { GraphQLClient } from 'graphql-request'
import { useStateValue } from "../components/StateProvider"
import {GET_USER_QUERY} from "../GraphQl/Queries.js"
import {BASE_URL} from '../Client.js'

function Login(){
    const [{ currentUser }, dispatch] = useStateValue();
      const onSuccess = async googleUser =>{
        try{
          const idToken = googleUser.getAuthResponse().id_token;
          //console.log({idToken})
          const client = new GraphQLClient(BASE_URL,{
            headers:{authorization: idToken}
          })
          const { get_User } = await client.request(GET_USER_QUERY)
          //console.log({get_User})
          dispatch({
            type:"LOGIN_USER",
            payload:get_User
          })
          dispatch({
            type:"IS_LOGGEDIN",
            payload:googleUser.isSignedIn()
          })
        }catch(err){
          onFailure(err)
        }
      }

      const onFailure = err =>{
        console.log("Error Logging in", err)
      }
      //signout
      const onSignOut = () =>{
        dispatch({
          type:"SIGNOUT_USER",
        })
        //console.log("user signed out")
      }
    return(
        <div>
          <div style={{
            width:"300px",
            margin:"10% 50px",
            backgroundColor:"#eee",
            padding:"10px",
            borderRadius:"10px",
            position:"absolute",
            top:"10px",
            }}>
            <div style={{margin:"0 15%"}}>
              {currentUser ? 
                <GoogleLogout
                buttonText="Sign Out of Keja"
                onLogoutSuccess={onSignOut}
                onLogoutFailure={onFailure}
              />:
              <GoogleLogin
                clientId="307243827987-qrlek1ihj0v5k6pmm3shscq4ec4tgfqb.apps.googleusercontent.com"
                buttonText="Sign In with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSigned={true}
                theme="dark"
                style={{flex:1}}
              />
              }
            </div>
            <div>
            <p
                    style={{
                      fontSize: "12px",
                      padding: "10px 0",
                      textAlign: "center",
                    }}
                  >
                    By continuing you agree to our Terms & Conditions. See our
                    Privacy Notice.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      borderTop: "1px solid #ffa31a",
                      marginTop: "10px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "14px",
                        padding: "10px 0",
                        fontFamily: "Poppins-Regular",
                      }}
                    >
                      New to Keja?
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        padding: "10px 0",
                        textAlign: "center",
                      }}
                    >
                      Create an account to recieve newletters on new
                      apartment,shows,Trending and be updated on special  and exciting offers.
                    </p>
                  </div>
            </div>
          </div>
        </div>
    )
}

export default Login;