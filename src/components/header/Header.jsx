import React from 'react'
import styles from './header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className={styles.body} >
      <img src={logo} alt="" />
    </div>
  )
}


export default Header
