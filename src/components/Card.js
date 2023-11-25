import React from 'react'
import styles from './card.module.css'

function Card({data}) {
  return (
    <div className={styles.card}>
      <div className={styles.topbar}>
        <div className={styles.id}>{data.id}</div>
        <div className={styles.profile}></div>
      </div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.bottombar}>
        <div className={styles.exclame}>
        <span>!</span>
        </div>
        <div className={styles.feature}>
          <div className={styles.circle}></div>
          Feature Request
        </div>
      </div>
    </div>
  )
}

export default Card