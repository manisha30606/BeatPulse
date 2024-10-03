"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from  './page.module.css'
import c1 from "../../../public/c4.jpg";
import c2 from "../../../public/c2.jpg";
import c3 from "../../../public/c5.jpg"




const combo = () => {
  return (
   <>
   <div className={styles.combo}>
    <h1 className={styles.combo_head}>Recent <span>Playlists</span></h1>
    <p className={styles.combo_para}>Discover Your Soundtrack Haven</p>
    <div className={styles.box_combo}>
        <div className={styles.box}>
            <Image className={styles.img} src={c2} alt="" />
            <h1>Melancholy Melodies</h1>
        
        </div>
        <div className={styles.box}>
            <Image  className={styles.img} src={c1} alt="" />
            <h1>Joyful Jams</h1>
        
        </div>
        <div className={styles.box}>
            <Image className={styles.img} src={c3} alt="" />
            <h1>Fiesta Frenzy</h1>
        
        </div>
    </div>
     <div className={styles.box_butt}>
     <Link href="/playlist" className={styles.bbtn}>View All</Link>
</div>

   </div>
   </>
  )
}

export default combo