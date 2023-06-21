import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

import "./People.css";

export default function People() {
  const [clicked , setClicked] = useState(false)
  return (
    <>
      <div>
        <form style={{ border: "none", boxShadow: "none", minHeight: "3rem" }}>
          <div className="container">
            <input
              style={{ margin: "0", width: "40rem" }}
              type="text"
              placeholder="Search User Name..."
            />
            <button
              style={{ margin: "0", boxShadow: "0 0 2px 2px greenyellow" }}
            >
              <SearchIcon/>
            </button>
          </div>
        </form>
      </div>
      <div className="people">
        <div className="card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/benjamin.jpg?alt=media&token=0b994bcf-d9a6-4276-b73c-88320505b476"
            alt="dp"
            className="dpimage"
          />
          <h3>Benjamin Netanyahu (Israel)</h3>
          <button onClick={()=>{setClicked(true)}}>{clicked ? 'Following' : '+Follow'}</button>
        </div>
        
        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/kishida.jpg?alt=media&token=b03a85dc-36e0-4474-9c24-9adece9930a1" alt="dp" className="dpimage" />
          <h3> Fumio Kishida (Japan)</h3>
          <button>+Follow</button>
        </div>

        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/Macron.jpg?alt=media&token=14f6503e-dd35-46b1-82bf-e6f572e936a8" alt="dp" className="dpimage" />
          <h3>Emmanuel Macron (France)</h3>
          <button>+Follow</button>
        </div>

        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/oman.jpg?alt=media&token=26d21b73-e7b6-43f8-9041-48da4185ed4e" alt="dp" className="dpimage" />
          <h3>Haitham bin Tariq Al Said (Oman)</h3>
          <button>+Follow</button>
        </div>

        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/pak.jpg?alt=media&token=ac4408c3-d22c-438a-a8d5-a2925192cecd" alt="dp" className="dpimage" />
          <h3>Asim Munir (Pakistan)</h3>
          <button>+Follow</button>
        </div>

        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/putin.jpg?alt=media&token=e066b410-4e21-445d-86ae-f3edbb132db4" alt="dp" className="dpimage" />
          <h3>Vladimir Putin (Russia)</h3>
          <button>+Follow</button>
        </div>

        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/rishi.jpg?alt=media&token=db3e8f2f-d8f8-4355-a5a6-1c7c2ae561a1" alt="dp" className="dpimage" />
          <h3>Rishi Sunak (UK)</h3>
          <button>+Follow</button>
        </div>

        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/salman.jpg?alt=media&token=01196799-0e09-4e10-b621-fe75aebfa3e9" alt="dp" className="dpimage" />
          <h3>Mohammed bin Salman Al Saud (Saudi Arab)</h3>
          <button>+Follow</button>
        </div>

        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/Trump.jpg?alt=media&token=e6d64a0f-ee3f-4bcc-8128-9cd59517d7bd" alt="dp" className="dpimage" />
          <h3>Donald Trump (USA)</h3>
          <button>+Follow</button>
        </div>

        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/Tsai%20Ing-wen.jpg?alt=media&token=080f1e0e-466b-4e3a-8cab-8c850b6a3e27" alt="dp" className="dpimage" />
          <h3>Tsai Ing-wen (Taiwan)</h3>
          <button>+Follow</button>
        </div>
        <div className="card">
          <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/xi.jpg?alt=media&token=3ae34fa0-31a7-4c44-abff-9ce529591182" alt="dp" className="dpimage" />
          <h3>Xi Jinping (North Taiwan)</h3>
          <button>+Follow</button>
        </div>
      </div>
    </>
  );
}
