import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'


function Investing() {
    return (
        <>
            <section className='investing py-5'>
                <Container>
                    <Row>
                        <div className='inevesting-head  text-center'>
                            <h2 className='child-heading'>
                                Investing built for a better future <span></span>
                            </h2>
                            <p>
                                Whether you're starting with $100 or $100 million, we're <br></br> here to
                                help you better invest in cryptocurrencies.
                            </p>
                        </div>
                    </Row>
                    <Row className='box-row py-5'>
                        <Col md={4}>
                            <Card style={{ width: '302px' }}>
                                <Card.Body>
                                    <div className="card-img">
                                        <img src="./img/Layer 20 copy 2 1.png" />
                                    </div>

                                    <Card.Title>Simplified</Card.Title>
                                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                    <Card.Text>
                                        The tools and information you need to buy, sell, trade, invest,
                                        and manage cryptocurrencies.
                                    </Card.Text>
                                    <Card.Text >
                                       <p className='bottom-text'> Get started with as little as <span>$100</span>.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '302px' }}>
                                <Card.Body>
                                    <div className="card-img">
                                        <img src="./img/Layer 19 copy 1.png" />
                                    </div>

                                    <Card.Title> Optimised</Card.Title>

                                    <Card.Text>
                                        The tools and information you need to buy, sell, trade, invest,
                                        and manage cryptocurrencies.
                                    </Card.Text>
                                    <Card.Text >
                                       <p className='bottom-text'> Get started with as little as <span>$100</span>.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card style={{ width: '302px' }}>
                                <Card.Body>
                                    <div className="card-img">
                                        <img src="./img/Layer 21 1.png" />
                                    </div>
                                    <Card.Title>Decentralised</Card.Title>

                                    <Card.Text>
                                        The tools and information you need to buy, sell, trade, invest,
                                        and manage cryptocurrencies.
                                    </Card.Text>
                                    <Card.Text >
                                       <p className='bottom-text'> Get started with as little as <span>$100</span>.</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Investing