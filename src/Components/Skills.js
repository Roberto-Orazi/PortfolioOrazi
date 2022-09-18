import { TypeH1 } from "react-bootstrap-icons"
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import tablerov2 from "../archivos/imagenes/tablerov2.png"
import agujaderecha from "../archivos/imagenes/agujaderecha.png"
import agujaizquierda from "../archivos/imagenes/agujaizquierda.png"
import fondoautos from "../archivos/imagenes/fondoautos.png"
export const Skills = () => {
    


return(
    <section className="skill" id="habilidades">
        
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx asdf">
                    <h2 className="asdfasdf">Habilidades</h2>
                    <p className="asdfasdf">
                        Estas son mis principales habilidades!
                    </p>
                    
                    
                    <div className="tableros">
                    <div className="rowss">
                    <img src={tablerov2} alt="tablero" className="tableroimg" />
                    <img src={agujaizquierda} className="agujaizq" />
                    <img src={agujaderecha} className="agujader" />
                    
                    
                    <div className="skill-Names">
                    <div className="hhh">  <h6>HTML, CSS, JS</h6></div>
                  <div className="hhh">  <h6>BOOTSTRAP, REACTJS</h6></div>
                    
                    </div>
                    </div>
                    
                    <div className="rowss">
                    <img src={tablerov2} alt="tablero" className="tableroimg" />
                    <img src={agujaizquierda} className="agujaizqq" />
                    <img src={agujaderecha} className="agujaderr" />
                    
                    
                    <div className="skill-Names">
                  <div className="hhh">  <h6>Nodejs, JS, NPM</h6></div>
                  <div className="hhh">  <h6>Python, MongoDB</h6></div>
                    </div>
                    </div>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
   
    </section>
)
    
}