import React from 'react'
import styles from './card.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <div>
        <div>CAM-11</div>
        <div></div>
      </div>
      <div>Conduct Security Vulnerability Assessment</div>
      <div>
        <div>!</div>
        <div>
          <span></span>
          Feature Request
        </div>
      </div>
    </div>
  )
}

export default Card