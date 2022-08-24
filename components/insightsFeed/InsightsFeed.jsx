import Share from "../share/Share";
import "./insightsFeed.css";
import { Bookmark, CenterFocusStrong, EditAttributes, Group, Person, PhotoLibraryOutlined, School, Star, TableChart, Videocam } from "@material-ui/icons";
import { TableCell } from "@material-ui/core";

export default function Feed() {
  return (
    <div className="insights">
      <div className="insightsWrapper">
        
        
    
        <div className="InsightsInfo">
        
         
          <div className="InsightItem">
            <span className="InsightKey"><h3>  Comparative Annalysis </h3></span>
           
            <span className="InsightValue"> Ishaan!
You are doing Excellent. Compared to others, following is your analytics.

<span className="InsightValue1">Your Strength:</span> Logical thinking 75%, Passion 65%, Ambition 95%

<span className="InsightValue1">Your Weakness:</span> Time management 40%, Organization skill 35%

<span className="InsightValue1">Your Personality:</span> Appearance 90%, Gender appeal 95%, Attitude 45%

<span className="InsightValue1">Your Growth:</span> Project 90%, Brand Recognisition75%, Milestone 90%  </span>
        </div>

          
      </div>
      <div className="InsightsInfo1">
    
         
        <div className="InsightPrItem">
          <span className="InsightKey"><h3> Overall Statistics </h3></span>
          <div className="InsightPr"> 
        <div className="Insightbar"> 
        <span  className="InsightText">  <h4>Topics </h4>   </span>
        18
        </div>
        <div className="Insightbar"> 
        <span className="InsightText"> <h4> Opinions</h4> </span>
        67
        </div>
        <div className="Insightbar"> 
        <span className="InsightText"> <h4> Photos </h4> </span>
        32
        </div>
        <div className="Insightbar"> 
        <span className="InsightText"> <h4> Debates </h4> </span>
        56
        </div>
        <div className="Insightbar"> 
        <span className="InsightText"> <h4> Projects </h4> </span>
        16
        </div>
        <div className="Insightbar"> 
        <span className="InsightText"> <h4> Videos </h4> </span>
        45
        </div>
     </div>
 
      </div>
 
             
    </div>
    <div className="InsightsInfo2">
        
         
        <div className="InsightItem">
          <span className="InsightBottom"> 
          <span className="InsightKey"><h3> ..</h3></span>

          <div className="InsightPr"> 
        <div className="InsightBotombar"> 
        <span  className="InsightBotomText">  <h4>Marketplace Offer </h4>   </span>
        300K Products, 200K Services, 150 Bids, 100K Giveaways

        </div>
        <div className="InsightBotombar"> 
        <span className="InsightBotomText"> <h4> Brand Association </h4> </span>
        300 Brands, 200K Associations, 15K Brand Ambassadors
        </div>
        <div className="InsightBotombar"> 
        <span className="InsightBotomText"> <h4> Platinum Milestone </h4> </span>
        100 users
        </div>
        <div className="InsightBotombar"> 
        <span className="InsightBotomText"> <h4> Gold Milestone </h4> </span>
        700 users
        </div>
        <div className="InsightBotombar"> 
        <span className="InsightBotomText"> <h4> Silver Milestone </h4> </span>
        3000 users
        </div>
        <div className="InsightBotombar"> 
        <span className="InsightBotomText"> <h4> Mentor </h4> </span>
        45 users
        </div>
     </div>
 
        </span>
 
      </div>
 
 
    
 
        
    </div>

    </div>
    </div>
  );
}