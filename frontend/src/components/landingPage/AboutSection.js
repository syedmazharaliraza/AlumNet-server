import React from "react";
import { Row, Col } from "react-bootstrap";

const AboutSection = () => {
  return (
    <section id='about'>
      <Row className='my-4'>
        <Col className='d-flex flex-column justify-content-center align-items-center'>
          <Row>
            <h1 className='heading my-4'>About Us</h1>
          </Row>
          <Row className='account-btns my-4'>
            <p>
              Students enters college with so many dreams and questions. They
              seek guidance from a person who has already gone through those
              situations and gained experiences. What are the course expertises?
              How to manage the different skills with curriculum? Where the
              opportunities lies? Which course will help them in their career?
              And many such queries and doubts that can only be resolved by an
              experienced persona. Who can be better than a passed out student
              from same college for all those valuable guidance? An Alumni is
              the person who can provide the best guidance and a society for
              like minded students. But there always a barrier of lack of
              communication arises. There is missing puzzle which can be solved
              by our project "AlumNET”.
            </p>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default AboutSection;
