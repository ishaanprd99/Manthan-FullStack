import "./sidebar.css";
import {
  RssFeed,
  
  Group,
  Bookmark,

  School,
  Person,
  Settings,
  AccountTree,
  BusinessCenter,
  Store,
  People,
  LocalAtm,
  Android,
  CardGiftcard,
 
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import {useNavigate} from "react-router-dom"


export default function Sidebar() {
  let navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <Settings className="topbarIcon" />
            <span className="topbarListItemText"> Settings </span>
          </li>
          <li className="sidebarListItem">
            <AccountTree className="topbarIcon" />
            <span className="topbarListItemText"> Project </span>
          </li>
          <li className="sidebarListItem">
            <Store className="topbarIcon" />
            <span className="topbarListItemText"> Marketplace </span>
          </li>
          <li className="sidebarListItem">
            <LocalAtm className="topbarIcon" />
            <span onClick={()=> {navigate("/manthanCoin")}} className="topbarListItemText"> Manthan Coins </span>
          </li>
          <li className="sidebarListItem">
            <Android className="topbarIcon" />
            <span className="topbarListItemText"> Brands </span>
          </li>
          <li className="sidebarListItem">
            <CardGiftcard className="topbarIcon" />
            <span className="topbarListItemText"> Wallet </span>
          </li>
          
        </ul>
        <h5 className="sideFeature"> Featured </h5>
        <img className="sidebarFeature" src="/assets/manthan_sidebar_wp.jpg" alt="" />

        
      </div>


      <ul className="sidebarBottomList">
        <li className="sidebarBottomListItem">
          About 
          </li>
          <li className="sidebarBottomListItem">
          Privacy 
          </li>
         
          <li className="sidebarBottomListItem">
          Contact 
          </li>
          <li className="sidebarBottomListItem">
          Help 
          </li>
          <li className="sidebarBottomListItem">
           Terms 
          </li>
          <li className="sidebarBottomListItem">
          Location 
          </li>
          <li className="sidebarBottomListItem">
          Career 
          </li>
          <li className="sidebarBottomListItem">
          Languages 
          </li>
          
          
        </ul>
    </div>
  );
}