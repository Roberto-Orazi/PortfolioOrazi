import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, LinkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} />
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a className="linkeo" href={LinkUrl}>Ir al sitio</a>
        </div>
      </div>
    </Col>
  );
};
