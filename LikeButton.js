import React, { useState } from "react";
import './LikeButton.css'

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const likeClickHandler = ()=>{
    if(liked){
        setLiked(false);
    }
    else {
        setLiked(true)
    }
  }

  return (
    <button 
    style={{backgroundColor : liked ? 'greenyellow' : 'black' , color : liked ? 'black' : 'greenyellow'}}
      className="like"
      onClick={likeClickHandler}
    >
      {!liked ? "Like" : "Liked"}
    </button>
  );
}
