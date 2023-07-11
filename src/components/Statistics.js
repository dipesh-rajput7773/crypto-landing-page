import React from 'react'
import { Container, Row } from 'react-bootstrap'

function statistics() {
    return (
        <section className='statstic-sec'>
            <Container>
                <Row>
                    <div className='stats-box py-4' >
                        <ul className='stat-ul'>
                            <li>
                                <div className="stat-cont">
                                    <span>$ 20,000,000</span>
                                    <p>Transaction Volume</p>
                                </div>
                            </li>

                            <li>
                                <div className="stat-cont">
                                    <span>2,234,000,000</span>
                                    <p>Tokens Transacte</p>
                                </div>
                            </li>
                            <li>
                                <div className="stat-cont">
                                    <span>25,000</span>
                                    <p>Secure Transactions</p>
                                </div>
                            </li>
                            <li>
                                <div className="stat-cont">
                                    <span>8,000</span>
                                    <p>Happy Users</p>
                                </div>
                            </li>
                            <li>
                                <div className='stat-cont'>
                                    <span>24 hrs</span>
                                    <p>Support</p>
                                </div>

                            </li>
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default statistics