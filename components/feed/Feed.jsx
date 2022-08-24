import Post from "../post/Post";
import Share from "../shareMain/Share";
import "./feed.css";
import { db } from "../../firebase";
import {useEffect, useState} from "react"
import { collection, doc, onSnapshot, orderBy, query} from "firebase/firestore";

export default function Feed() {
  const [posts,  setPosts] = useState([]);
  const colRef = collection(db, "posts")

  const q = query(colRef, orderBy('timestamp', 'desc'))


  useEffect(
    ()=>
    onSnapshot(q,(snapshot)=>
    setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    
    ),
  []
  );


  return (
    <div className="feed">
      
      <Share/>

      
        
      {posts.map(posts => (
        <Post 
        key={posts.id}
        profilePic={posts.profilePic}
    image={posts.image}
    username ={posts.username}
    timestamp = {posts.timestamp}
    message = {posts.message}
        />
      )
 

      )}



    
   

     
    </div>
  );
}