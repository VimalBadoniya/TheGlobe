import React, { useState } from "react";

export default function NewPost() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  return (
    <>
      <section>
        <div className="inrowline">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/modiji.jpg?alt=media&token=40e87abb-8804-42be-9384-797020de4880" alt="profile-pic" className="dpimage" />
          <h2>Welcome ! Narendra Modi</h2>
          <h4>Showcase your creativity by creating a new post below :</h4>
        </div>
      </section>
      <div className="container">
        <form>
          <textarea
            value={content}
            placeholder="Enter Text...."
            onChange={(e) => {
              setContent(e.target.value);
            }}
            required
          ></textarea>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            style={{ width: "15rem" }}
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    </>
  );
}
