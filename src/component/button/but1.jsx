"use client"
import React from 'react'
import styles from "./page.module.css"


const but1 = () => {
  return (
   <>
     <div className={styles.button}></div>
     <button className={styles.btn}>Start Listen</button>
   </>
  )
}

export default but1