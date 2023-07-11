import React from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Herosec from './components/Herosec';
import BottomHeader from './components/BottomHeader';
import Statistics from './components/Statistics';
import Investing from './components/Investing';
import Wealth from './components/Wealth';


import './app.css'

const App = () => {
  return (
    <>
      <Header />
      <BottomHeader />
      <Herosec />
      <Statistics />
      <Investing />
      <Wealth />
    </>

  )
}

export default App