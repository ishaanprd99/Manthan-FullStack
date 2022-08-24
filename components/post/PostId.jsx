import { doc, onSnapshot, collection, query, orderBy , serverTimestamp, addDoc, limit} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db} from "../../firebase";
import Topbar from '../topbar/Topbar'
import {UserAuth} from "../../context/AuthContext"
import "./PostId.css"
import { Avatar } from "@material-ui/core";
import Comments from "../Comments/Comments";
import Post from "./Post";


function PostId({timestamp}) {
    const[input, setInput] = useState("");
    const { user } = UserAuth();
    const [comments,  setComments] = useState([]);
  const colRef1 = collection(db, "comments")

  const handleSubmit = e => {
    e.preventDefault();

    addDoc(colRef1,{
        comments: input,
        profilePic : user.photoURL,
        username: user.displayName,
        timestamp: serverTimestamp(),              

    })

    setInput("");
};

  const q = query(colRef1, orderBy('timestamp', 'desc'), limit(6))


  useEffect(
    ()=>
    onSnapshot(q,(snapshot)=>
    setComments(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    
    ),
  []
  );
   

  
return (
    
  <>
    < Topbar/>
    
    <div className="homeContainer"> 
    <div className="postIdWrapper">
            <div className="postIdLeft">
            
            <div className='postId'>
        <div className='postId__top'>
        <Avatar src={user.photoURL}
        className='postId__avatar'/>
        <div className="postId__topInfo">
            <h3>{user.displayName}</h3>
            <p> {new Date(timestamp?.toDate()).toUTCString()} </p>

        </div>
     </div>

        <div className="postId__bottom">
        <p>hello </p>
        </div>

        <div className="postId__image">
        <img src="https://media2.giphy.com/media/l2SpKixq4pdJVMx5m/giphy.gif" alt=""/>

        </div>


        <div className='commentShare'>

<div className='commentShare__top'>
    < Avatar src={user.photoURL}/>
    <form>
        <input 
            value={input}
            onChange={(e) => setInput(e.target.value) }
        className="commentShare__input"
            placeholder={`What are your comments, ${user?.displayName}?`}
        />

        <button onClick={handleSubmit} type = "submit">
            Hidden submit
        </button>


    </form>
    </div>
    </div>
         </div>
         </div>


            <div className="postIdRight">

           
   
    {comments.map(comments => (
        <Comments 
        key={comments.id}
        profilePic={comments.profilePic}
    username ={comments.username}
    timestamp = {comments.timestamp}
    comments = {comments.comments}
        />
      )
 

      )}

                
            </div>
        </div>
   
    </div>
    
    </> 
  )
 
}

export default PostId