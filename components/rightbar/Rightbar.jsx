import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { Star } from "@material-ui/icons";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
              <h5 className="TopicsTitle"> Trending Topics </h5>

          <ul className="rightbarTopicList">
        <li className="rightbarTopicListItem">
          Politics & Relationship
          </li>
          <li className="rightbarTopicListItem">
          Religion & Spirituality
          </li>
         
          <li className="rightbarTopicListItem">
          Science & Technolodgy
          </li>
         
          
        </ul>

        <h5 className="DebateTitle"> Trending Debates </h5>

        <ul className="rightbarDebateList">
        <li className="rightbarDebateListItem">
          Impact of Vaccine On Kids
          </li>
          <li className="rightbarDebateListItem">
          Other Side of Ukraine War
          </li>
         
          <li className="rightbarDebateListItem">
          Space, New Frontier!
          </li>
         
          
        </ul>

        <h4 className="rightbarTitles">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };


  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
         <HomeRightbar />
      </div>
    </div>
  );
};
 
