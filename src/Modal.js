import React from 'react'
import './index.css'

const Modal = ({clickedImg, imgToggle}) => {
    console.log(`url: ${clickedImg}`)
  return (
    <div className="backdrop" onClick={() => {imgToggle()} }>
        <img id="modalImg" src={clickedImg} alt="Images" />
    </div>
  )
}

export default Modal