import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup , createNewUser} from "../redux/slice";
import {useNavigate} from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate()
  const [isLogin, setLogin] = useState(true);
  const errorState = useSelector((state) => {
    return state.initialLoading.error;
  });
  const dispatch = useDispatch();
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const enteredName = useRef();
  const loginButtonHandler = (e) => {
    e.preventDefault();
    setLogin(true);
  };
  const signupButtonHandler = (e) => {
    e.preventDefault();
    setLogin(false);
  };
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    let userEmail = enteredEmail.current.value;
    let userPassword = enteredPassword.current.value;
    let userName = enteredName.current.value;
    let obj = {
      email: userEmail,
      password: userPassword,
      returnSecureToken: true,
      name: userName,
    };
    let userObj = {
      userId : userEmail ,
      profile: { name: userName, imgURL: 'url', email: userEmail },
      posts: [{ media: 'url', content: '', likes: 0 }, { media: 'url', content: '', likes: 10 }, ],
      friends: [{uniqueID : '' },],
    }
    dispatch(signup(obj));
    dispatch(createNewUser(userObj));
    navigate('/home')


  };
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    let userEmail = enteredEmail.current.value;
    let userPassword = enteredPassword.current.value;

    let obj = {
      email: userEmail,
      password: userPassword,
      returnSecureToken: true,
    };
    dispatch(login(obj));
    navigate('/home')
  };

  return (
    <React.Fragment>
      <header>
        <h1>
          The Globe{" "}
          <span>
            
          </span>
        </h1>
        <div>
          <button onClick={loginButtonHandler}>Login</button>
          <button onClick={signupButtonHandler}>Signup</button>
        </div>
      </header>
      {isLogin && (
        <div className="container">
          <form onSubmit={loginSubmitHandler}>
            <input
              type="email"
              placeholder="Enter Email"
              ref={enteredEmail}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              ref={enteredPassword}
              required
            />
            {errorState && <h4>{errorState}</h4>}
            <button>Login</button>
          </form>
        </div>
      )}
      {!isLogin && (
        <div className="container">
          <form onSubmit={signupSubmitHandler}>
            <input type="text" placeholder="Name" required ref={enteredName} />
            <input
              type="email"
              placeholder="Email"
              ref={enteredEmail}
              required
            />
            <input
              type="password"
              placeholder="Password"
              ref={enteredPassword}
              required
            />
            <input type="number" placeholder="Phone Number(Optional)" />
            {errorState && <h4>{errorState}</h4>}
            <button>Signup</button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
}
