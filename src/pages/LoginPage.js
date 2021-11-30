import { Button, makeStyles, withStyles } from "@material-ui/core";
import React, 
  {useState } from "react";


function LoginPage(){
    const useStyles = makeStyles((theme) => ({
        root: {
          "& > *": {
            margin: "0px",
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          },
        },
      }));
      const ColorButton = withStyles((theme) => ({
        root: {
          color: theme.palette.getContrastText("#ffa31a"),
          backgroundColor: "#ffa31a",
        },
      }))(Button);
      const classes = useStyles();
    
      //const navigate = useNavigate();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [username, setUsername] = useState("");
      //const [user, setUser] = useState(null);
    return(
        <div style={{width:"300px",margin:"10% auto",backgroundColor:"#e5e5e5",padding:"10px",borderRadius:"10px"}}>
        <form className={classes.root} noValidate autoComplete="on" >
                <h5>Email: *</h5>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: "14px",
                    color: "#1b1b1b",
                    border: "none",
                    height: "100%",
                    padding: "5px 10px",
                    margin: "11px",
                    outline: "none",
                    overflowWrap: "break-word",
                  }}
                />
                <h5>Username: *</h5>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: "14px",
                    color: "#1b1b1b",
                    border: "none",
                    height: "100%",
                    padding: "5px 10px",
                    margin: "11px",
                    outline: "none",
                    overflowWrap: "break-word",
                  }}
                />
                <h5>Password: *</h5>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: "14px",
                    color: "#1b1b1b",
                    border: "none",
                    height: "100%",
                    padding: "5px 10px",
                    margin: "11px",
                    outline: "none",
                    overflowWrap: "break-word",
                  }}
                />
                <ColorButton
                  className="login_submit"
                  //type="submit"
                  //onClick={SignIn}
                >
                  SIGN IN
                </ColorButton>
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
                  <ColorButton className="login_submit" 
                  //onClick={Register}
                  >
                    Create New Account
                  </ColorButton>
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
              </form>
        </div>
    )
}

export default LoginPage;