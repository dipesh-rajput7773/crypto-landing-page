import React from 'react'
import { Container,CloseButton  } from 'react-bootstrap'
import { Link } from "react-router-dom";

function BottomHeader() {
  return (
<section className='bottom-head'>
    <Container>
        <div className='bottom-cont'>
            <span>New</span>
            <p> TBC Stake Pool FOUR is live!
          <a href=''>
              Sign up to get loyalty rewards, upto 40% discount on transaction
              fees, and more.
              </a>
            </p>
            <CloseButton />

        </div>
    </Container>
</section>
  )
}

export default BottomHeader