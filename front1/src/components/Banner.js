import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/2.avif";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Space Art!!!", "Space Art XD", "Space Art :o" ];
  const period = 2000;


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="fs-1">Seja Bem vindo ao DesapegaMusic!</span>
                <h1>a Plataforma nº1 de Trocas de Instrumentos</h1>
                  <p className="fs-3 text-warning">Criado especialmente para você que deseja trocar seu instrumento por outro, basta encontrar um e dar match.</p>
                  <button onClick={() => console.log('connect')}>Entre em Contato<ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}
