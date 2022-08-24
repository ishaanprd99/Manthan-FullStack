import "./topbar.css";
import { Bookmark, Chat, Group, Home, Notifications, Person, PowerOffRounded, RssFeed, School, Search } from "@material-ui/icons";
import {useNavigate, Link} from "react-router-dom"
import {UserAuth} from "../../context/AuthContext"
import { Avatar } from "@material-ui/core";

function Topbar() {

  

  let navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
        <span className="logo"> 
        <img onClick={()=> {navigate("/")}} src="/assets/manthan_logo1.png" alt="" className="topbarImg" />
        <h1 className="logoName"> MANTHAN </h1> 
      
                </span>
               < div className="Searchbar">
        <Search htmlColor="White" className="searchIcon" />
            <input placeholder="Search Manthan" className="searchInput" />
          </div>
                
        </div>
        

        <div className="topbarCenter">
        
        <div className="newsbar">
        <span className="newsbarText"> <h4>BREAKING!</h4> </span>


          </div>
          <ul className="topbarList">
          <li className="topbarListItem">
            <button onClick={()=> {navigate("/profile")}} className="topbarListItemButton"> Profile </button>
          </li>
          <li className="topbarListItem">
            <button onClick={()=> {navigate("/home")}} className="topbarListItemButton">Feed </button>
          </li>
          <li className="topbarListItem">
            <button onClick={()=> {navigate("/topics")}} className="topbarListItemButton">  Topics </button>
          </li>
          <li className="topbarListItem">
            <button className="topbarListItemButton">Community </button>
          </li>
          <li className="topbarListItem">
            <button onClick={()=> {navigate("/insights")}} className="topbarListItemButton">Insights </button>
          </li>
          </ul>
          
        </div>
        <div className="topbarRight">
          
        <Avatar className= "topbarProfileImg" src= {user.photoURL} alt="" />

          <div className="topbarLinks">
          < span className="topbarLink" onClick={()=> {navigate("/profile")}} >  {user?.displayName} </span>
     
          </div>

          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">5</span>
            </div>
            {user?.displayName ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to='/'>Sign in</Link>

      )}

            </div> 
          
          </div>
       
      
    </div>
  )
}

export default Topbar