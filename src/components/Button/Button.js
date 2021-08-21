import React from 'react'
import './Button.css'

const Button = ({ text, handleClick, type = 'button', style = '' }) => {
  const styles = 'button '.concat(style)

  return <button className={styles} type={type} onClick={handleClick}>{text}</button>
}

export default Button
