import "./insights.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import InsightFeed from "../../components/insightsFeed/InsightsFeed"


function Insights() {
    return (
    
        <>
        < Topbar />
        <div className="profile"> 
    
        < Sidebar/>
       
          
    
        </div>
      
             <div className="profileRightBottom">
             <InsightFeed/>   < Rightbar/>
             </div>
         
        
         </>
      )
    }

export default Insights