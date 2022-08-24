import "./register.css"
import {useNavigate} from "react-router-dom"


function Register() {
    let navigate = useNavigate();
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
            <img onClick={()=> {navigate("/")}} src="/assets/manthan_logo1.png" alt="" />

                <h3 className="registerLogo"> MANTHAN </h3>
                <span className="loginDesc">
                    Knowledge, Action, Reward 
                </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                <h1 className="loginTitle" > Lets Debate..  </h1>

                 <input placeholder="First Name"  className="registerInput" />
                 <input placeholder="Last Name"  className="registerInput" />
                 <input placeholder="Email ID"  className="registerInput" />
                 <input placeholder="Password"  className="registerInput" />
                 <input placeholder="Mobile NO"  className="registerInput" />
                 <input placeholder="Date of Birth"  className="registerInput" />

                <button onClick={()=> {navigate("/home")}} className="registerButton">Sign Up </button>


                </div>
                <h2 className="registerFooter"> By signing up, you agree to our TERMS, DATA, PRIVACY and COOKIES POLICY </h2>

                <h2 className="registerLogin">Already have an account?</h2>
                
                 <button onClick={()=> {navigate("/home")}} className="loginRegister"> Log into Account  </button>


            </div>

        </div>
        </div>
  )
}

export default Register