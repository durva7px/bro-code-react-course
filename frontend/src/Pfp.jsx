import React from 'react'

const Pfp = () => {
    const imgUrl = './assets/stripe.png';
    const handleClickPfp = () => console.log('Pfp Clicked');
    return (
    <img  onClick={handleClickPfp} src={imgUrl} alt="stripe.png"></img>
  )
}

export default Pfp