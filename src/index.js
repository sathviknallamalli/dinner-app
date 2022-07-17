import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCL4-9jk0tNNBf5M87YCv4iKuFZSz3RsKU",
  authDomain: "ranking-app-3ad15.firebaseapp.com",
  projectId: "ranking-app-3ad15",
  storageBucket: "ranking-app-3ad15.appspot.com",
  messagingSenderId: "1059209397098",
  appId: "1:1059209397098:web:f78818ec8134b8e14e1b13",
  measurementId: "G-0QEX6WBEP2"
};

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
