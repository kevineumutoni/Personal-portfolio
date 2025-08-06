import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png"
import projImg8 from "../assets/img/ProjectImg8.png"
import projImg7 from "../assets/img/ProjectImg9.png"

import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Safi Greens admin dashboard",
      description: "Build a React Admin Dashboard to track app sales, products and users",
      imgUrl: projImg1,
      githubUrl: "https://github.com/kevineumutoni/bigminds-frontend",
      visitSite: "https://safiigreens-admins.vercel.app/",
    },
    {
      title: "Survive or Extinct game",
      description: "Dive into the thrilling world of natural selection—play, strategize, and prove you're the ultimate survivor.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/simplykevine/survive-or-extinct-game",
      visitSite: "https://evolveorextinct.netlify.app/",
    },
    {
      title: "Safi Informational website",
      description: "Discover the story behind Safi Greens—insights, guidance, and a welcoming hub for curious visitors",
      imgUrl: projImg4,
      githubUrl: "https://github.com/kevineumutoni/big-minds-informational",
      visitSite: "https://safiigreens.netlify.app/",
    },
    {
      title: "Ankole Grill website",
      description: "Savor the flavor: a vibrant frontend for Kenya's Ankole Grill, enticing food lovers with every click.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/kevineumutoni/Ankole-Grill-Website",
      visitSite: "https://simplykevinesite.netlify.app/",
    },
    {
      title: "SafiGreens API",
      description: "Hosted API url that allow vendors to add their products and admin to measure the app performance",
      imgUrl: projImg7,
      githubUrl: "https://github.com/kevineumutoni/Safi-Greens-backend",
      visitSite: "https://safi-greens-backend.onrender.com/api/",
    },
    {
      title: "Data cleaning using pandas, and numpy for supervised learning",
      description: "Transform raw data into powerful insights—harness Python's libraries for smarter machine learning.",
      imgUrl: projImg8,
      githubUrl: "https://colab.research.google.com/drive/1iZpNh44MAHLCMC0OigJDTg-LLJmWVj6E",
    }
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Creating Change with Code</h2>
                <p>
                  Code is more than lines it's the language of connection and creativity,
                  transforming ideas into impact. From brainstorming sessions to deployment day,
                  every project has fueled my passion for innovation and teamwork. Together, we harness
                  technology not just to solve problems, but to create experiences and drive change, one project at a time.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="coming-soon-container">
                        <h3 className="shaking-text">Future projects to be loaded here 🚀</h3>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="coming-soon-container">
                        <h3 className="shaking-text">Future projects to be loaded here 🚀</h3>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}