import "./profile.css"
import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from "../../components/feedDb/FeedDb"
import { Chat, ChatBubble, PersonAdd, Settings,  } from "@material-ui/icons"
import Sidebar from '../../components/sidebar/Sidebar'
import {UserAuth} from "../../context/AuthContext"



function Profile() {
  const { user } = UserAuth();
  return (
    <>
    < Topbar />
    <div className="profile"> 

    < Sidebar/>
    <div className="profileBox">
      <img src={user.photoURL} alt="" />
      <h4 className="profileName" > {user?.displayName} </h4>
      <div className="feedInfoItem">
            <span className="profileInfoKey">Age:</span>
            <span className="rightbarInfoValue">  23 </span>
          </div>
          <div className="feedInfoItem">
            <span className="profileInfoKey">Gender:</span>
            <span className="rightbarInfoValue">  Male </span>
          </div>
          <div className="feedInfoItem">
            <span className="profileInfoKey">Nationality:</span>
            <span className="rightbarInfoValue">  Indian </span>
          </div>
         
      <div className="profileBoxBottom">
        <h5>1.5k</h5> <h6> Followers</h6>
        <h5>1.6k </h5> <h6> Friends </h6>
        <h5> 500 </h5> <h6> Following </h6>
      </div>
      <Settings className="profileIcon"/>
      <button className="profileButton"> More About Me </button>
      <PersonAdd className="profileIcon"/>
    <button className="profileButton"> Follow Me </button>
    <ChatBubble className="profileIcon"/>

    </div>
  
         <div className="profileRightBottom">
           <Feed /> < Rightbar/>
         </div>
     </div>
     
    
    
     </>
  )
}

export default Profile