import React from 'react'
import { Container, Row, Col, Button  } from 'react-bootstrap'

function Herosec() {
  return (
   <>
 <section className='hero-sec'>
    <Container>
        <Row className='pt-4'>
            <Col md={6} lg={6} className='py-4 '>
               <div className='hero-left'>
                 <div className='sub-heading'>
                    <h6><img src='./img/Frame.png'></img> Your crypto in your control</h6>
                 </div>
                 <h1>Investing in crypto made better</h1>
                 <p className='pera py-4'>
                Truly decentralised app that gives you the tools, inspiration,
                and support you need to become a better crypto investor.
              </p>
              <div className='button-hero'>
              <Button variant="primary" className='hero-btn'>Get Started</Button>{' '}
              <Button variant="outline-primary" className='hero-btn'>Launch App</Button>

              </div>
              <div className='brand'>
                <img src='./img/Group 5332.png'></img>
              </div>
               </div>
            </Col>
            <Col md={6} lg={6} className='text-end'>
                 <div className='hero-right'>
                    <div className='hero-img'>
                        <img src='./img/iphone-12--black.png'></img>
                    </div>
                 </div>
            </Col>
        </Row>
    </Container>
 </section>
   </>
  )
}

export default Herosec