import React from 'react'
import { createPortal } from 'react-dom'

const Backdrop = ({show,clickHandler}) => {
  return show && createPortal(
    <div
      className={`w-screen h-screen bg-gray-300 bg-opacity-20 blur-xl`}
      onClick={clickHandler}
    ></div>,
    document.getElementById("backdrop")
  )
}

export default Backdrop