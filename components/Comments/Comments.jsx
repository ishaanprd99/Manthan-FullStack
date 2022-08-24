import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Comments.css"
import { UserAuth } from '../../context/AuthContext'

function Comments({ profilePic, username, timestamp, comments}) {
    const { user } = UserAuth();

  return (
    <div className="comment">
                <div className='comment__top'>
        <Avatar src={profilePic}
        className='comment__avatar'/>
        <div className="comment__topInfo">
            <h3> {username}</h3>
            <p> {new Date(timestamp?.toDate()).toUTCString()}</p>

        </div>
     </div>
     <div className="post__bottom">
        <p>{comments}</p>
        </div>

        </div> 
  )
}

export default Comments