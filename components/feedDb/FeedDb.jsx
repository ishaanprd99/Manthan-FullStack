import Post from "../post/Post";
import Share from "../share/Share";
import "./feedDb.css";
import { Posts } from "../../dummyData";
import { Bookmark, Group, Person, School, Star } from "@material-ui/icons";

export default function FeedDB() {
  return (
    <div className="feedDb">
      <div className="feedDbWrapper">
        <Share />
        <ul className="feedList">
        <li className="feedListItem">
            <Person className="feedbarIcon" />
            <span className="feedListItemText"> Opinions </span>
          </li>
          <li className="feedListItem">
            <School className="feedbarIcon" />
            <span className="feedListItemText">  Photos </span>
          </li>
          <li className="feedListItem">
            <Group className="feedbarIcon" />
            <span className="feedListItemText"> Videos </span>
          </li>
          <li className="feedListItem">
            <Bookmark className="feedbarIcon" />
            <span className="feedListItemText"> Shares </span>
          </li>
          
        </ul>
    
        <h4 className="rightbarTitle">User Information </h4>
        <div className="UserInfo">
        
         
          <div className="UserInfoItem">
            <span className="UserInfoKey"><h3>  Knowledge:</h3></span>
            <span className="UserInfoValue"> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/></span>
          </div>
          <div className="UserInfoItem">
            <span className="UserInfoKey"><h3>  Personality:</h3></span>
            <span className="UserInfoValue"> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/></span>
          </div>
          <div className="UserInfoItem">
            <span className="UserInfoKey"><h3>  Projects:</h3></span>
            <span className="UserInfoValue"> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> </span>
          </div>
          <div className="UserInfoItem">
            <span className="UserInfoKey"><h3>  Achievements:</h3></span>
            <span className="UserInfoValue"> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/></span>
          </div>
          <div className="UserInfoItem">
            <span className="UserInfoKey"><h3>  Testimonials:</h3></span>
            <span className="UserInfoValue"> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/></span>
          </div>
          <div className="UserInfoItem">
            <span className="UserInfoKey"><h3>  Reccomendations:</h3></span>
            <span className="UserInfoValue"> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/></span>
          </div>
          <div className="UserInfoItem">
            <span className="UserInfoKey"><h3>  Marketplace:</h3></span>
            <span className="UserInfoValue"> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/> <Star htmlColor="Gold"/></span>
          </div>
        </div>
    
      </div>
    </div>
  );
}