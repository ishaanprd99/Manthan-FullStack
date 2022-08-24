import Share from "../share/Share";
import "./mcFeed.css";
import { TableCell } from "@material-ui/core";

export default function Feed() {
  return (
    <div className="manthanCoin">
      <div className="manthanCoinWrapper">
        
        
    
        <div className="manthanCoinInfo">
        
        <h3 className="MC">Manthan Coin</h3>

        <div className="MCbar"> 
        <span className="MCText"> <h4> Total MC</h4> </span>
        67
        </div>

        <ul className="MCList">
        <li className="MCListItem">
            <span className="MCListItemText"> About MC </span>
          </li>
          <li className="MCListItem">
            <span className="MCListItemText">  Top MC </span>
          </li>
          <li className="MCListItem">
            <span className="MCListItemText"> My MC </span>
          </li>
          
        </ul>

        <h5 className="MCDescription" >Manthan Coin or just MC is a program to reward active participations of
users based on their knowledge, activities, social-development based projects
and the feedback received on the activities at the platform.
MC can either be converted into online Shopping Vouchers or
Cash transferable to credit card or bank account. </h5>


<h4 className="MCCalc"> Basis of Calculation: <h5 className="MCCalcDesc"> 1 MC is equivalent to 1 US Dollar </h5> </h4>
         
  <h4 className="McActivities"> 
  Main Activities  </h4>
  <h4 className="McActivities"> 
  Combined Activities  </h4>
    <h5 className="McActiDesc">
    <li>1,000 Likes ≈ 1 MC</li>
   <li>1,000 Dislikes ≈ (-1) MC</li> 
    <li>1,000 Agree ≈ 1 MC</li> 
 <li> 1,000 Disagree ≈ (-1) MC</li> 
 <li> 1,000 Flag/Report ≈ (-1) MC</li> 
 <li> 100 Achievements ≈ 1 MC</li> 
  <li>100 Testimonials ≈ 1 MC </li> 
  <li> 100 Recommendation ≈ 1 MC </li> 
 <li>10 Projects ≈ 1 MC</li> 
 <li>10 Marketplace Offers ≈ 1 MC</li> 
  <li> 1 Brand Recognition ≈ 1 MC</li>
    </h5>
    <h5 className="McActiDesc">
        <li>100 *KPA Points ≈ 1 MC</li>
        <li>1000 *ART Points ≈ 1 MC</li>
        <li>10,000 *MBP Points ≈ 1 MC</li>
        <li>   </li>
        <li>   </li>
        <li>  </li>
        <li>  </li>
        <li> Platinum Milestone ≈ 1000 MC</li>
        <li>Gold Milestone ≈ 100 MC</li>
        <li>Silver Milestone ≈ 10 MC</li>
        <li>User Signup ≈ 1 MC</li>
    </h5>

        <h5 className="Kpa" > *KPA stands for Knowledge, Projects & Activities.
 <h5 className="Kpa1">Average of KAP determines KAP Point</h5>
*ART stands for Achievements, Recommendation & Testimonials.
 <h5 className="Kpa1">Average of KAP determines KAP Point</h5>
*MBP stands for Marketplace, Brand Recognition & Personal Photos & Videos.
 <h5 className="Kpa1">Average of KAP determines MBP Point</h5>
 </h5>
   

   <h4 className="McDonation"> MC Donations</h4>
   <h5 className="McDonationDesc"> If a user achieves a Milestone, the MC donators of such user will
receive a return bonus of same milestone MC, distributed in the ratio
of their contribution after determining how much of percentage
MC donation has played a role in achieving that milestone</h5>
          
      </div>
      
    
        


    </div>
    </div>
  );
}