import React from "react";
import { Container, Navbar, Nav, Card, Button, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import perfilImage from './imgs/rainafot.jpg';
import napod from './imgs/napod.png';
import godot from './imgs/godot.png';
import f1 from './imgs/f1.png';
import dmf from './imgs/dmf.png';

const projects = [
  {
    title: "NAPOD",
    description: "Aplicação que consome a API de Astronomia da NASA.",
    link: "https://napod.netlify.app/",
    image: napod,
  },
  {
    title: "I Cavallini",
    description: "Projeto relacionado a dados e estatísticas da Fórmula 1.",
    link: "https://icavallini.netlify.app/",
    image: f1,
  },
  {
    title: "Dunder Mifflin Files",
    description: "Curiosidades e Informações sobre The Office.",
    link: "https://dundermfiles.netlify.app/",
    image: dmf,
  },
  {
    title: "Wood Life Knight",
    description: "Jogo feito com Godot, baseado em sobrevivência.",
    link: "https://rainasouza.itch.io/wood-life-knight",
    image: godot,
  }
];

const Portfolio = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">Raina Souza</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="https://github.com/rainasouza">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5" id="about">
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
            <Image 
              src={perfilImage} 
              roundedCircle 
              fluid 
              className="profile-pic" 
              style={{ width: '160px', height: '160px' }} 
            />
          </Col>
          <Col xs={12} md={8}>
            <h1>Um pouco sobre mim!</h1>
            <p>
              Sou graduanda em Ciência da Computação pela UFCG, apaixonada por desenvolvimento de software e inovação. 
              Tenho o objetivo de aprender algo novo todos os anos e sempre busco me desafiar com novas metas e conhecimentos.
            </p>
            <p>
              Além da tecnologia, sou fã de animais, adoro passar tempo na praia e me perco em músicas clássicas que alimentam minha alma. 
              Quando não estou imersa em código, estou lendo um bom livro e explorando novos mundos através das palavras.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5" id="projects">
        
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col xs={12} md={6} lg={4} key={index} className="mb-4">
              <Card className="custom-card">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="dark" href={project.link} target="_blank">
                    Ver Projeto
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
