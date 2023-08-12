import { Routes, Route } from 'react-router-dom'; 
import React, {useState, useEffect} from 'react';

import Header from './components/Header';

import HomePage from './routes/HomePage';
import ContactUs from './routes/ContactUs';
import LoginRoute from './routes/LoginRoute';
import RegisterRoute from './routes/RegisterRoute';
import SecretRoute from './routes/SecretRoute';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    // check if user is logged in
    console.log("Checking if user is logged in");
    console.log(localStorage.getItem("token"));
    console.log(loggedIn);
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<LoginRoute setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={<RegisterRoute />} />
        {/* secret route if logedin */}
        { loggedIn && <Route path="/secret" element={<SecretRoute />} /> }

        {/* 404 page */}
        <Route path="*" element={<h1>404 Not Found</h1>} />


      </Routes>
    </div>
  );
}
