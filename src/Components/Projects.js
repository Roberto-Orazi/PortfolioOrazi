import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import fondoproyectos from "../archivos/imagenes/banner-bg.jpg";
import minalovers from "../archivos/imagenes/minalovers.jpg";
import athenastore from "../archivos/imagenes/athenastore.jpg";
import directimpresiones from "../archivos/imagenes/3direct.jpg";
import consultorio from "../archivos/imagenes/consultorio.jpg";
import taller from "../archivos/imagenes/Orazirepuestos.jpg";
import felix from "../archivos/imagenes/felixcasabe.jpg"


export const Projects = () => {
  const projects = [
    {
      title: "3Direct Impresiones",
      description: "Hecha con HTML, CSS y React.JS",
      imgUrl: directimpresiones,
      LinkUrl:"https://www.3directimpresiones.com.ar/"
    },
    {
      title: "Athena Store",
      description: "Hecha con HTML, CSS y NODE.JS",
      imgUrl: athenastore,
      LinkUrl:"https://www.athenastore.com.ar/"
    },
    {
      title: "Consultorio Todoroff",
      description: "Hecha con HTML y CSS",
      imgUrl: consultorio,
      LinkUrl:"https://www.silviatodoroff.com.ar/"
    },
    {
      title: "Felix Casabe",
      description: "Hecha con ReactJS",
      imgUrl: felix,
      LinkUrl:"https://www.felixcasabe.com.ar/"
    },
    {
      title: "Mina Lovers",
      description: "Hecha con HTML, CSS Y JS",
      imgUrl: minalovers,
      LinkUrl:"https://www.minalovers.com.ar/"
    },
    {
      title: "Orazi Repuestos",
      description: "Hecha con HTML Y CSS",
      imgUrl: taller,
      LinkUrl:"https://www.orazirepuestos.com.ar/"
    },
    
  ];

  return (
    <section className='project' id='proyectos'>
      <Container>
        <Row>
          <Col>
            
                
                  <h2>Proyectos</h2>
                  <p>
                   Aca podes ver algunos de mis proyectos personales!
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    
                    <Tab.Content
                     
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='second'>
                        <p>
                          Todavia no llegue a programar tantas paginas, pero en un futuro cercano, voy a completar esta seccion tambien!
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>
                        Todavia no llegue a programar tantas paginas, pero en un futuro cercano, voy a completar esta seccion tambien!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                
              
           
          </Col>
        </Row>
        
        
      </Container>
     
 
    </section>
  );
};
