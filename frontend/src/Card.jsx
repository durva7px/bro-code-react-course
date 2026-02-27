import React from 'react'
import picture from './assets/stripe.png'

const Card = () => {
  return (
    <div className='card'>
        <img src={picture} alt='stripe.png'></img>
        <h2>Durva</h2>
        <p>Software Engineer at Stripe</p>
    </div>
  );
}

export default Card