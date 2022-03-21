import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/LoginPage";
import { useSelector } from "react-redux";

const Main = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  return (
    <main className='py-3'>
      <Container>
        <Routes>
          <Route path='/' element={userInfo ? <HomePage /> : <LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Container>
    </main>
  );
};

export default Main;
