import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../archivos/imagenes/logo1.png";
import navIcon1 from "../archivos/imagenes/navIcon1.png";
import navIcon2 from "../archivos/imagenes/navIcon2.png";
import navIcon3 from "../archivos/imagenes/navIcon3.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand='md' className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href='#inicio'>
          <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link
              href='#inicio'
              className={
                activeLink === "inicio" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("inicio")}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              href='#habilidades'
              className={
                activeLink === "habilidades"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("habilidades")}
            >
              Habilidades
            </Nav.Link>
            <Nav.Link
              href='#proyectos'
              className={
                activeLink === "proyectos"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("proyectos")}
            >
              Proyectos
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.instagram.com/roberorazi/'>
                <img src={navIcon1} alt='' />
              </a>
              <a href='https://www.linkedin.com/in/roberto-orazi-0663b5225/'>
                <img src={navIcon2} alt='' />
              </a>
              <a href='https://twitter.com/RobertOrazi'>
                <img src={navIcon3} alt='' />
              </a>
            </div>

            <button className='vvd'>
              <span>Contactame</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
