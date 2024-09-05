import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Headd from './Headd.js';
import Language from './Language.js';
import logo from './logo.png';
import Input from './Input.js';
import Option1 from './Option1.js';
import Option2 from './Option2.js';
import Option3 from './Option3.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Container fluid>
      <Row className="roww">
        <Col><Headd /></Col>
        <Col className='drop'><Language /></Col>
      </Row>
      <Row className='name_logo'>
        <Col>
          <div><img src={logo} className='logo'></img></div>
        </Col>
        <Col>
          <Row className='txt' id="txt1">INFINITE</Row>
          <Row className='txt' id="txt2">AURA</Row>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Input id="inp"></Input>
      </Row>
      <Row>
        <Col><Option1 /></Col>
        <Col><Option2 /></Col>
        <Col><Option3 /></Col>
      </Row>
    </Container>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
