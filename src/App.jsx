import React, { useEffect, useState } from 'react'
import * as solanaWeb3 from '@solana/web3.js'
// import About from './About'
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
import fpen from './assets/home/7F Pen.svg'
import zero7 from './assets/home/0000777.svg'
import h6tag from './assets/home/h6.svg'
import hrLines from './assets/hr-line.svg'

function App() {
  const [walletAddress, setWalletAddress] = useState('')
  const [walletBalance, setWalletBalance] = useState('')
  
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window

      if (solana) {
        const response = await solana.connect({ onlyIfTrusted: true })
        setWalletAddress(response.publicKey.toString())
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.log(error)
    }
      
  }

  const connectWallet = async () => {
    const { solana } = window

    if (solana) {
      const response = await solana.connect()
      setWalletAddress(response.publicKey.toString())
    } else {
      alert('Solana object not found! Get a Phantom Wallet 👻');
    }
  }

  // useEffects
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected()
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])
  useEffect(() => {
    if (walletAddress) {
      // Call SOlana program here

      // Set state
      <Button variant="outline-light" size="lg">Mint NFT</Button>
      
    }
  }, [walletAddress])

  return (
    <ThemeProvider  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <div className="App">
        <div className="containers pb-4">
          <div className="lines">
            <img src={headSocial} alt="" className="headSocial" />
            <div className="mintButton mb-2">
              {/* Insert Connect wallect function */}
              <Button variant="outline-light" size="lg" onClick={connectWallet} >Connect Wallet</Button>
              <Button variant="outline-light" size="lg">Mint with Credit Card</Button>{' '}
            </div>
            
            <Container fluid className="px-5">
              <Row className="profile-section">
                <Col lg={4} md={6} xs className="profile-group">
                  <img src={portait} alt="" className="profileRep" />
                  <a href="#about" className="profileCard">
                    <Row className="row-css">
                      <Col className="upper-label"><img src={fpen} alt="" /></Col>
                      <Col className="upper-label"><img src={zero7} alt="" /></Col>
                    </Row>
                    <h2 style={{ margin: "0", marginTop: "-7px" }}>About</h2>
                    <div><img src={h6tag} alt="" /></div>
                  </a>
                </Col>
                <Col lg={4} md={6} xs className="profile-group">
                  <img src={portait} alt="" className="profileRep" />
                  <a href="#roadmap" className="profileCard">
                    <Row className="row-css">
                      <Col className="upper-label"><img src={fpen} alt="" /></Col>
                      <Col className="upper-label"><img src={zero7} alt="" /></Col>
                    </Row>
                    <h2 style={{ margin: "0", marginTop: "-7px" }}>Roadmap</h2>
                    <div><img src={h6tag} alt="" /></div>
                  </a>
                </Col>
                <Col lg={4} md={6} xs className="profile-group">
                  <img src={portait} alt="" className="profileRep" />
                  <a href="#team" className="profileCard">
                    <Row className="row-css">
                      <Col className="upper-label"><img src={fpen} alt="" /></Col>
                      <Col className="upper-label"><img src={zero7} alt="" /></Col>
                    </Row>
                    <h2 style={{ margin: "0", marginTop: "-7px" }}>Team</h2>
                    <div><img src={h6tag} alt="" /></div>
                  </a>
                </Col>
              </Row>
            </Container>

          </div>
          <img src={hrLines} alt="" className="mt-4" />
          <Container id="about">
            <h1 className="mt-4">About Us</h1>
            <div className="sub-title mb-5">The goal for 7F Social Club is to encourage ownership and self growth to our members.</div>
            <p className="about-text">7F Social Club is an investor group started by a small community of entrepreneurs aspiring to capitalize on being early to Web 3.0 ; We plan to scale a metaverse portfolio for our DAO. allowing members to be apart of what we believe is Real Estate 2.0, by allocating funds from mint to purchase our first metaverse property.This will be the original 7Fsocialclub.</p>
          </Container>
          <img src={hrLines} alt="" className="mt-4" style={{ fill: "#aa7e3f" }} />
          <Container id="roadmap" className="pt-4">
            <h1 className="mb-3">Roadmap <span>v.01</span></h1>
            <Row className="mt-4">
              <Col md={4} className="roadmap-group">
                <h2 className="roadmap-title">PHASE 1</h2>
                <ul>
                  <li>- Fill Chosen One’s List</li>
                  <li>- Launch Website</li>
                  <li>- Release Weekly Event Schedule</li>
                  <li>- Apply for listing on all Secondary Marketplaces</li>
                  <li>- Find Rarity Partner- Find Partnerships that benefit the Club</li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={{ span: 4, offset: 8 }} className="roadmap-group">
                <h2 className="roadmap-title">PHASE 2</h2>
                <ul>
                  <li>- Creation of the 7F DAO</li>
                  <li>- Mint Day (222 Chosen Ones)</li>
                  <li>- Purchase a Portals NFT   to use as the DAOs Metaverse Headquarters</li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4} className="roadmap-group">
                <h2 className="roadmap-title">PHASE 3</h2>
                <h2>TBD</h2>
              </Col>
            </Row>
          </Container>
          <img src={hrLines} alt="" className="mt-4" style={{ fill: "#aa7e3f" }} />
          <Container id="faq" className="pt-4">
            <h1 className="mb-3">FAQ</h1>
            <div className="faq-group">
              <h2 className="faq-title">What is a 7F Prisoner?</h2>
              <p>7F Prisoners is the Genesis collection created by the 7F Social Club. A collection of unique individuals have been imprisoned in the year 2103 after committing cyber crimes against society. These individuals were once part of an organization which sold human remains, salvaged parts and controlled the entire blackmarket</p>
            </div>
            <div className="faq-group">
              <h2 className="faq-title">How many prisoners will be minted?</h2>
              <p>222 Prisoners will be minted in the genesis collection. More prisoners can arrive at any time.</p>
            </div>
            <div className="faq-group">
              <h2 className="faq-title">How much will it cost to mint?</h2>
              <p>2 SOL</p>
            </div>
            <div className="faq-group">
              <h2 className="faq-title">Will there be Rarity rankings?</h2>
              <p>Yes! Rarity Charts will be released directly after mint.Ranging from Minimum Security to Death Row Prisoners.</p>
            </div>
          </Container>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
