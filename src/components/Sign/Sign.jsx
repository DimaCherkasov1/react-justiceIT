import React, { useState } from 'react'
import './Sign.css'
import { Link } from 'react-router-dom'

function Sign({ setIsOpen, children, active }) {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setIsOpen(!active)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Sign
