import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import "./share.css";
import {UserAuth} from "../../context/AuthContext"
import { db } from '../../firebase';

import { EmojiEmotions, Photo, VideoCall } from '@material-ui/icons';
import { addDoc, collection , Firestore, serverTimestamp} from 'firebase/firestore';

function MessageSender() {

    const { user } = UserAuth();

    const[input, setInput] = useState("");
    const[imageUrl,setImageUrl] = useState("");
    const colRef = collection(db, "posts")
   

        //Some clever database
        const handleSubmit = e => {
            e.preventDefault();
    

            addDoc(colRef,{
                message: input,
                profilePic : user.photoURL,
                username: user.displayName,
                image: imageUrl,
                timestamp: serverTimestamp(),              

            })
            
    
            setInput("");
            setImageUrl("");
    
        };




  return (
    <div className='messageSender'>

    <div className='messageSender__top'>
    < Avatar src= {user.photoURL} />

        <form>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value) }
            className="messageSender__input"
            placeholder={`What are your thought's?, ${user?.displayName}`}
            />
            <input
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value) }
                placeholder= "Image Url (Optional)" />

            <button onClick={handleSubmit} type = "submit">
                Hidden submit
            </button>


        </form>
        </div>

        <div className='messageSender__bottom'>

        <div className='messageSender__option'>
        < VideoCall style={{ color: "red" }} />
        <h3> Live Video </h3>


        </div>

        
        <div className='messageSender__option'>
        < Photo style={{ color: "green" }} />
        <h3> Photo/Video </h3>


        </div>
        
        <div className='messageSender__option'>
        < EmojiEmotions style={{ color: "orange" }} />
        <h3> Feeling/Activity </h3>


        </div>

        </div>

        </div>
  )
}

export default MessageSender