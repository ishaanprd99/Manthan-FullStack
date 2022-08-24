import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login1 from "./pages/login1/Login1";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Topics from "./pages/topics/Topics"
import Insights from "./pages/insights/Insights";
import ManthanCoin from "./pages/manthanCoin/ManthanCoin"
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import PostId from "./components/post/PostId";

function App() {
  return (
    <>

    <div>
    
      <AuthContextProvider>
     
    
      <Router>
      <Routes>
      < Route path="/" element= {<Login1/>} />
      < Route path="/register" element= {<Register/>} />
        < Route path="/home" element= {
         <Protected><Home/> </Protected> } />
        < Route path="/profile" element= {<Profile/>} />
        < Route path="/topics" element= {<Topics/>} />
        < Route path="/insights" element= {<Insights/>} />
        < Route path="/manthanCoin" element= {<ManthanCoin/>} />
        < Route path="/postid" element= {<PostId/>} />
       
      </Routes>

    </Router>
      </AuthContextProvider>
     
      
      

    </div>
    </>
    )}

    

export default App;
