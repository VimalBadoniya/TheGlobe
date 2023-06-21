import React, { useState } from 'react'
import './Profile.css'


export default function Profile() {
    const [showForm , setShowForm] = useState(false);
    const submitButtonHandler = (e)=>{
        e.preventDefault();
        alert("Profile Updated")
    }
  return (
    <div className='containerDiv'>
        <div className='leftDiv'>
            <img src="https://firebasestorage.googleapis.com/v0/b/social-media-f01ab.appspot.com/o/modiji.jpg?alt=media&token=40e87abb-8804-42be-9384-797020de4880" alt="profile-pic" className='dp' />
            <h3> Name - Narendra Modi</h3>
            <h3>Email - modi@gmail.com</h3>
            <h3>Phone - +919876543210</h3>
        </div>
        <div>
            <div className='rightDiv1'>
                <button onClick={()=>{setShowForm(true)}}>Edit Profile</button>
                { showForm &&
                <form onSubmit={submitButtonHandler} style={{width : '40rem' , marginLeft : '0'}}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' style={{width : '30rem'}}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' style={{width : '30rem'}} />
                    <label htmlFor="phone">Phone No.</label>
                    <input type="number" id='phone' style={{width : '30rem'}}/>
                    <label htmlFor="photo">Upload new profile picture</label>
                    <input type="file" id='photo' style={{width : '30rem'}} />
                    <div className="inline">
                        <button type='button' onClick={()=>{setShowForm(false)}}>Cancel</button>
                        <button type='submit'>Submit</button>
                    </div>
                    
                </form>}
            </div>
            <div className='rightDiv2'>
                <ul>
                    <li>Post 1</li>
                    <li>Post 2</li>
                    <li>Post 3</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
