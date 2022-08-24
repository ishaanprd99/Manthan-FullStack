import "./login1.css"
import {useNavigate, Link} from "react-router-dom"
import {UserAuth} from "../../context/AuthContext"
import { useEffect } from "react";
import {} from "../../context/AuthContext"
import { GoogleButton } from 'react-google-button';

import { auth } from "../../firebase";



function Login() {


    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
  
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error);
      }
    };

    
  
    useEffect(() => {
      if (user != null) {
        navigate('/home');
      }
    }, [user]);
  
 
  
    
   
  return (
    <>


    <div className="login">
      
        <div className="loginWrapper">
            <div className="loginLeft">
           

            <img src="/assets/manthan_logo1.png" alt="" />

                <h3 className="loginLogo"> MANTHAN </h3>
                <span className="loginDesc">
                    Knowledge, Action, Reward 
                </span>
            </div>
            <div className="loginRight">

                <div className="loginBox">
                <h1 className="loginTitle" > Lets Debate..  </h1>

                 <input placeholder="Username"  className="loginInput" />
                 <input placeholder="Password"  className="loginInput" />
                <button onClick={()=> {navigate("/")}}  className="loginButton">Log In</button>

                <span className="loginForgot"> Forgot Password? </span>

               <button onClick={()=> {navigate("/register")}} className="loginRegister" > Sign Up </button>
                 
               <GoogleButton className="GoogleAuth" onClick={handleGoogleSignIn} />

                </div>
            </div>
        </div>
        </div>
        </>

  );
}

export default Login