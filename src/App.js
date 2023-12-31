import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import VideoPlayer from "./components/VideoPlayer";
import Services from "./components/pages/Services";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import ProtectedRoute from "./path-to-your-protected-route-component";

const App = () => {
  <Auth0Provider
    domain="dev-hgmqfdn6h1uohhld.us.auth0.com"
    clientId="bncvPbYM66lwG06SQrII1dp8hqH6QewP"
    redirectUri={window.location.origin}
  >
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/watch-trailer" element={<VideoPlayer />} />
      </Routes>
    </Router>
    ;
  </Auth0Provider>;
};

export default App;
