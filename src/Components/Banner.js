import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons";
import headerImg from "../archivos/imagenes/header-img.png";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Front End Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className='banner' id='inicio'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
         
            <h1>
              {`Hola! Soy Roberto`}
              <span className='wrap'>
                <br></br>
                {text}{" "}
              </span>
            </h1>
            <p>
              Soy un estudiante de Ingenieria Mecanica en la Facultad de
              Ciencias Exactas, Ingeniería y Agrimensura. <br></br>Me apasionan
              mucho los autos de carrera, y toda la ingenieria detras de ello.
            </p>
        
            
              <button onClick={() => console.log("connect")}>Contactame<a className="whtss" href="https://api.whatsapp.com/send?phone=5493412152970&text=Hola,%20vengo%20de%20tu%20portfolio%20y%20me%20gustaria%20comunicarme%20con%20vos"><Whatsapp size={25} />
              
              </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Img'></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
