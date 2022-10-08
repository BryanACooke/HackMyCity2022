import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './jspages/header'
import App from './App.js';
import StudentPage from './jspages/studentPage.js'
import MainDashboard from './jspages/mainDashboard.js'


ReactDOM.render(
  <Router>
  <Header />
 <Routes>
  <Route exact path="/" element={<App/>} />
 <Route path="/mainDashboard" element={<MainDashboard/>} /> 
 <Route path="/studentPage" element={<StudentPage/>} />

  </Routes>
  

</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();