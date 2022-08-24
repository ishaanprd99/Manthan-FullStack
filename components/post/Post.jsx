import { Avatar } from '@material-ui/core';
import { AccountCircle, ChatBubble, ExpandMore, Favorite, NearMe } from '@material-ui/icons';
import React from 'react';
import "./Post.css";
import {useNavigate, Link} from "react-router-dom"
import Comment from '../Comments';


function Post({ profilePic, image, username, timestamp, message, comments}) {
    let navigate = useNavigate();

  return (
    <div className='post'>
        <div className='post__top'>
        <Avatar src={profilePic}
        className='post__avatar'/>
        <div className="post__topInfo">
            <h3>{username}</h3>
            <p> {new Date(timestamp?.toDate()).toUTCString()} </p>

        </div>
     </div>

        <div className="post__bottom">
        <p>{message}</p>
        </div>

        <div className="post__image">
        <img onClick={()=> {navigate("/postid")}} src={image} alt=""/>

        </div>

        <div className="post__options">
            <div className="post__option">
                <Favorite/>
                <p> Like </p>
            </div>
        
            <div className="post__option">
                <ChatBubble />
                <p> {comments} Comments</p>
            </div>

            <div className="post__option">
                <NearMe/>
                <p> Share</p>
            </div>

            <div className="post__option">
                <AccountCircle/>
                <ExpandMore/>
            </div>

        </div>
    </div>
  )
}

export default Post