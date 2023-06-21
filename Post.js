import React, { useState } from "react";
import "./Post.css";
import LikeButton from "./LikeButton";

function Post() {
  const [showCommentBox, setShowCommentBox] = useState(false);
  return (
    <div className="container">
      <div className="post">
        <h4>Narendra Modi</h4>
        <div className="inline">
          {" "}
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/post%201.PNG?alt=media&token=8a1992e0-1369-42e3-be7d-9b9f3799a1ed" alt="post-1" className="postImage" />
        </div>

        <p className="caption">This is my post</p>

        <div className="likeDiv">
          <LikeButton />
          <button
            style={{ fontSize: "large", border: "1px solid greenyellow" }}
            onClick={() => {
              setShowCommentBox(true);
            }}
          >
            Comment
          </button>
        </div>

        {showCommentBox && (
          <div className="commentDiv">
            <textarea
              style={{ width: "90%", margin: "2px 25px" }}
              placeholder="Write your comment here..."
            ></textarea>
            <div>
              <button
                style={{ fontSize: "large" }}
                onClick={() => {
                  setShowCommentBox(false);
                }}
              >
                Cancel
              </button>
              <button style={{ fontSize: "large" }}>Post Comment</button>
            </div>
          </div>
        )}

        <div className="allComments">
          <p>Comment 1 </p>
          <p>Comment 2 </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
