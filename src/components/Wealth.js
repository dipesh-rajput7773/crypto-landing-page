import React from 'react'
import { Container } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Wealth() {
    return (
        <>
            <section className='wealth-sec'>
                <Container>
                    <div className="-wealth-heading text-center">
                        <h2>
                            Investing is the key to building wealth <span></span>
                        </h2>
                        <p>
                            Slide the coin and see how your crypto investment could have grown
                            over the last five years
                        </p>
                    </div>
                    <div className='wid'>
                        <div className='deposite-sec'>
                            <p>Monthly Deposite</p>
                            <ProgressBar now={60} />
                            <div className="price">
                                <span>$0</span>
                                <span>$200</span>
                            </div>
                        </div>

                        <div className='saving-sec '>
                            <div className='saving'>
                                <p>Saving account</p>
                                <h4>$12,000</h4>
                            </div>
                            <div className='saving'>
                                <p>Crypto Investing account after 5 years</p>
                                <h4>$58,000</h4>
                            </div>
                        </div>
                    </div>


                </Container>
            </section>
            <section className='chart-sec'>
                <Container>
                    <div className='chart-content'>
                        <div className='chart-img'>
                            <img src='./img/Graphs.png'></img>
                           
                        </div>
                        <p>
                                Chart is the comparison between the past five year performance of
                                Bitcoin (BTC) and Ethereum (ETH) and savings account with an
                                interest rate of 0.07% yearly. Investing in cryptocurrencies
                                involves risk of loss and performance is not guaranteed.
                            </p>

                    </div>

                </Container>
            </section>

        </>
    )
}

export default Wealth