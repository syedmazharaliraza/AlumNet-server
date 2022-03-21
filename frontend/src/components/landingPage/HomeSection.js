import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <Row className='my-4 home'>
      <Col className='d-flex flex-column justify-content-center align-items-center'>
        <Row>
          <h1 className=''>
            A platform that bridges the gap between Directorate and trainees
          </h1>
        </Row>
        <Row className='account-btns'>
          <Link className='btn btn-primary me-4' to='/login'>
            Login
          </Link>
          <Link className='btn btn-outline-primary' to='/signup'>
            Sign up
          </Link>
        </Row>
      </Col>
    </Row>
  );
};

export default HomeSection;
