import "./topics.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from "../../components/topicsFeed/TopicsFeed"


function Topics() {
  return (
    
    <>
    < Topbar />
    <div className="profile"> 

    < Sidebar/>
   
      

    </div>
  
         <div className="profileRightBottom">
           <Feed /> < Rightbar/>
         </div>
     
    
     </>
  )
}

export default Topics