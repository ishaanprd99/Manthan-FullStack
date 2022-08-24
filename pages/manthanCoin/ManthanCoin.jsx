import "./manthanCoin.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import McFeed from "../../components/mcFeed/McFeed"

function manthanCoin() {
    return (
    
        <>
        < Topbar />
        <div className="profile"> 
    
        < Sidebar/>
       
          
    
        </div>
      
             <div className="profileRightBottom">
              <McFeed/>  < Rightbar/>
             </div>
         
        
         </>
      )
    }

export default manthanCoin