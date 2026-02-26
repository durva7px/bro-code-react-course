import React from 'react'

const styles = {
    backgroundColor: "hsl(200, 100%, 60%)",
    height: "30px",
    width: "400px",
    color: "white",
}

const Box = () => {
  return (
    <div style={styles}>This is a Box with inline css</div>
  )
}

export default Box