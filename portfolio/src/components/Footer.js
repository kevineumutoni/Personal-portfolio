import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon7 from "../assets/img/NavIcons1.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const githubIconSize = { width: "28px", height: "21px"};

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/umutoni-kevine-aa9a29278/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/kevineumutoni" target="_blank" rel="noopener noreferrer">
                <img src={navIcon7} alt="GitHub" style={githubIconSize} />
              </a>
              <a href="https://www.instagram.com/simplykevine/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
              
            </div>
            <p>&copy; {new Date().getFullYear()} Kevine Umutoni All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}