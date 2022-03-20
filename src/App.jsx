import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'
import '../styles/style.css'
// import assets folder and all files inside
// import * as assets from 'assets/home
import headSocial from './assets/home/7f social.svg'
import portait from './assets/home/blur-img.svg'
import fpen from './assets/home/7f Pen.svg'
import zero7 from './assets/home/0000777.svg'
import h6tag from './assets/home/h6.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <div className="App">
        <div className="containers">
          <img src={headSocial} alt="" className="headSocial" />
          <div className="mintButton">
            <Button variant="outline-secondary" size="lg">Connect Wallet</Button>{' '}
            <Button variant="outline-secondary" size="lg">Mint with Credit Card</Button>{' '}
          </div>
          
          <Container fluid>
            <Row className="profile-section">
              <Col className="profile-group">
                <img src={portait} alt="" className="profileRep" />
                <div className="profileCard">
                  <Row className="row-css">
                    <Col className="upper-label"><img src={fpen} alt="" /></Col>
                    <Col className="upper-label"><img src={zero7} alt="" /></Col>
                  </Row>
                  <h2 style={{ margin: "0", marginTop: "-7px" }}>ABOUT</h2>
                  <div><img src={h6tag} alt="" /></div>
                </div>
              </Col>
              <Col className="profile-group">
                <img src={portait} alt="" className="profileRep" />
                <div className="profileCard">
                  <Row className="row-css">
                    <Col className="upper-label"><img src={fpen} alt="" /></Col>
                    <Col className="upper-label"><img src={zero7} alt="" /></Col>
                  </Row>
                  <h2 style={{ margin: "0", marginTop: "-7px" }}>ABOUT</h2>
                  <div><img src={h6tag} alt="" /></div>
                </div>
              </Col>
              <Col className="profile-group">
                <img src={portait} alt="" className="profileRep" />
                <div className="profileCard">
                  <Row className="row-css">
                    <Col className="upper-label"><img src={fpen} alt="" /></Col>
                    <Col className="upper-label"><img src={zero7} alt="" /></Col>
                  </Row>
                  <h2 style={{ margin: "0", marginTop: "-7px" }}>ABOUT</h2>
                  <div><img src={h6tag} alt="" /></div>
                </div>
              </Col>
            </Row>
          </Container>

        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
