"use client"
import React from 'react'
import styles from "./page.module.css"

const intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.intro_head}>
          <h2>Welcome to BeatPulse, Your Epicenter of Sonic Discovery!</h2>
        </div>
        <div className={styles.intro_para}>
            <p>"Immerse yourself in the world of music with BeatPulse, where seamless discovery and sharing collide. Explore a vast collection of tunes, curated for every mood and taste, making your musical journey unforgettable."</p>
        </div>
        <div className={styles.intro_cate}>
            <div className={styles.intro_cate_box}>
                 <h1>MoodCraft Playlists</h1>
                 <p>Elevate your mood with MoodCraft Playlists dynamic, personalized soundtracks tailored to every emotion.</p>
            </div>
            <div className={styles.intro_cate_box}>
                 <h1>Sounds Spotlight</h1>
                 <p>Tune into personalized jams curated by your favorite artists for an immersive listening experience and Intersting.</p>
            </div>
            <div className={styles.intro_cate_box}>
                 <h1>Favorite Sync</h1>
                 <p>Sync your favorite tunes seamlessly across devices, ensuring your personalized playlist is always within reach.</p>
            </div>
            <div className={styles.intro_cate_box}>
                 <h1>Download Delight</h1>
                 <p>"Download and enjoy favorite tracks offline—empowering you to play cherished music anytime, anywhere. and EveryWhere."</p>
            </div>
        </div>

        
      </div>
    </>
  )
}

export default intro