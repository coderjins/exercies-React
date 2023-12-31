import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.scss";
import "./styles/common.scss";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import ThreadList from "./pages/ThreadList/ThreadList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ThreadList />);
