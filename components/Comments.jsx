import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

export default function Comment({ id }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [user] = UserAuth();
  

  const commentRef = doc(db, "posts", id);
  useEffect(() => {
    const docRef = doc(db, "posts", id);
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, []);

  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      updateDoc(commentRef, {
        comments: arrayUnion({
          user: user.uid,
          userName: user.displayName,
          comment: comment,
          createdAt: new Date(),
          commentId: uuidv4(),
        }),
      }).then(() => {
        setComment("");
      });
    }
  };

  // delete comment function
  const handleDeleteComment = (comment) => {
    console.log(comment);
    updateDoc(commentRef, {
        comments:arrayRemove(comment),
    })
    .then((e) => {
        console.log(e);
    })
    .catch((error) => {
        console.log(error);
    })
  };
  return (
    <div>
      Comment
      <div className="container">
        {comments !== null &&
          comments.map(({ commentId, user, comment, userName , createdAt}) => (
            <div key={commentId}>
              <div className="border p-2 mt-2 row">
                <div className="col-11">
                  <span
                    className={`badge ${
                      user === user.uid
                        ? "bg-success"
                        : "bg-primary"
                    }`}
                  >
                    {userName}
                  </span>
                  {comment}
                </div>
                <div className="col-1">
                  {user === user.uid && (
                    <i
                      className="fa fa-times"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteComment({ commentId, user, comment, userName , createdAt})}
                    ></i>
                  )}
                </div>
              </div>
            </div>
          ))}
        {user && (
          <input
            type="text"
            className="form-control mt-4 mb-5"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            placeholder="Add a comment"
            onKeyUp={(e) => {
              handleChangeComment(e);
            }}
          />
        )}
      </div>
    </div>
  );
}