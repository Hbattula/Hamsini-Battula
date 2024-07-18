import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon2.svg";
import '../App.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col xs={12}>
            <div className="social-icon" style={{justifyContent: 'center' }}>
              <a href="https://www.linkedin.com/in/hamsini-battula/"><img src={navIcon1} alt="Icon" className="icon-animate" /></a>
              <a href="https://github.com/Hbattula"><img src={navIcon2} alt="Icon" className="icon-animate" /></a>
              <a href="https://www.facebook.com/profile.php?id=61556963707806"><img src={navIcon3} alt="Icon" className="icon-animate" /></a>
            </div>
            <p className="footer-text">Let's connect on social media</p>
            <p className="footer-text">&copy; 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
