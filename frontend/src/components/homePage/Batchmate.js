import React from "react";
import "./Batchmate.css";
import { Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Batchmate = ({ batchmate }) => {
  return (
    <Row className='d-flex align-items-center tile my-4 border border-2'>
      <Col lg={2}>
        <Image
          className='rounded-circle border border-2 mx-4'
          src='/images/general/sample-profile.png'
        />
      </Col>
      <Col lg={8} className='details'>
        <Link to='/'>
          <h5>Name: {batchmate.name}</h5>
        </Link>
        <Row className='my-1'>
          <span>
            Course: {batchmate.course}, Branch: {batchmate.branch}
          </span>
        </Row>
        <Row>
          <span>
            Batch: {batchmate.year_of_admission} -{" "}
            {batchmate.year_of_passing_out}
          </span>
        </Row>
      </Col>
      <Col lg={2} className='buttons d-flex flex-column align-items-center'>
        <Link className='btn btn-danger w-75 my-2' to='/'>
          Profile
        </Link>
        <Link className='btn btn-success w-75 my-2' to='/'>
          Message
        </Link>
      </Col>
    </Row>
  );
};

export default Batchmate;
