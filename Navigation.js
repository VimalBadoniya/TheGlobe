import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice";
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

export default function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutButtonHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/')

  };
  return (
    <React.Fragment>
      <header>
        <div className="inline">
          <h1>
            The Globe{" "}
            <span>
              
            </span>
          </h1>
        </div>
        <div>
          <NavLink className='a'  to='/home'>Home</NavLink>
          <NavLink className='a' to='/profile'>Profile</NavLink>
          <NavLink className='a' to='/people'>People</NavLink>
          <NavLink className='a' to='/world'>World</NavLink>
          <button onClick={logoutButtonHandler}>Logout</button>
        </div>
      </header>
    </React.Fragment>
  );
}
