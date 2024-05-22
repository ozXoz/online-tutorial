import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={3} md={6} xs={12}>
          <div className="header-benefits">
            <a  href="/Benefits">Benefits</a>
                <p>
                    The goal of the tutoring is to help students overcome academic 
                    challenges and lead them to autonomous or independent learning.
                </p>
                <p>It is a special kind of teaching that is different
                 from the teaching performed by teachers, friends, and parents.
                </p>
                <p>Life happens and changes fast. With online tutoring, you can set your student's tutoring sessions when it works for you. 
                    With availability in the evenings as well as weekends.</p>
                             
            </div>
          </Col>
          <Col lg={3} md={6} xs={12}>
          <div className="header-pricing">
              <a  href="/Pricing">Pricing</a>
                <p>
                    Don't waste any time jumping between disconnected tutorials and courses made by various instructors.
                </p>
                <p>Subscribe and learn everything from Online Tutorial Web! 
                </p>

                <p className="canadian-dollar">
                    $5/m
                    Cancel anytime! </p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={12}>
            <div className="header-features"><a  href="/Features">Features
              </a>
                  <p>
                      Web app that has features to promote collaboration between. 3 main features would be, video group chat, resources for learning, person blog for showing personal achievements and to find friends that like similar things, Whiteboard that helps the session with
                      tutor by giving them tools for communication of concepts. 
                  </p>
                  <p>Promotional we will give free admin tools to the tutor, paid for by the students funding, students will also pay for the entire cloud. The student pays us and we give commission to the tutor. The tutor will receive 
                      recommendations for student blog profile matchmaking.
                  </p>
              </div>
          </Col>
          <Col lg={3} md={6} xs={12}>
          <div className="header-tutoring"><a  hre
          f="/BecomeTutor">Tutor
            </a>
               <ul>
                Our app is going to have various features such as:
                <li> Instant support for students who need help with their school concepts.</li>
                <li>Great online-collaboration for students as well as tutors.</li>
                <li>Library resource for students to search.</li>
                <li>  personal blog for students to write something about their life like hobbies, passions,
                     etc. so then they can contact each other.</li>
                     <li>  whiteboards to facilitate video chat that contain shapes,
                         drawing tools, diagrams for promoting visual learning.</li>
               </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home