import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, visitSite }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          alt={title}
          className="project-image"
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ marginTop: "10px" }}>
            {visitSite && (
              <Button
                variant="primary"
                href={visitSite}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "8px" }}
                size="sm"
              >
                Visit Site
              </Button>
            )}
            {githubUrl && (
              <Button
                className="github-btn"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
              >
                View on GitHub
              </Button>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};