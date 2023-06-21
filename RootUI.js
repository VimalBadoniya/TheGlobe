import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { initialRender } from "../redux/slice";
import Login from "./Login";
import Navigation from "./Navigation";

function RootUI() {
  const loginState = useSelector((state) => {
    return state.initialLoading.loginStatus;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const isUser = localStorage.getItem("user");
    if (isUser) {
      dispatch(initialRender());
    }
  }, [dispatch]);
  return (
    <>
      {!loginState && <Login />}
      {loginState && <Navigation />}
      <Outlet />
    </>
  );
}

export default RootUI;
