import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './Features.css';

const Features = () => {
  return (
    <Container>
      <Row>
          <Col lg={4} md={6} xs={12}>
            <h1 className="features-title">Features</h1>
            <p className="features-info">Online tutoring web has tons of features people can expect with modern online tutoring platform</p>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <h2 className="features-main">Whiteboards</h2>
            <p className="features-info">Give you extremely good ideas and concepts needed to succeed well in your post secondary career.</p>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <h2 className="features-main">On time Tutors</h2>
            <p className="features-info">Our tutors are expected to be focused and on time while they work. If they do not help students as planned, we remove them</p>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <h2 className="features-main">No additional price hikes</h2>
            <p className="features-info">As you are a student, our tutors get removed if they ask them to pay more or refuse to do work if you do not pay them. We know your tight budget very well</p>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <h2 className="features-main">Strong expertise</h2>
            <p className="features-info">Our tutors are only allowed to help students in their own expertise such as if you are a computer student, you get tutor who is expert in computers</p>
          </Col>
      </Row>
    </Container>
  )
}

export default Features;

