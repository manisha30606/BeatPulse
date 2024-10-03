"use client"
import React, { useState } from 'react';
import styles from "./page.module.css"
import Image from 'next/image'


  
const artist = () => {
  const [showAll, setShowAll] = useState(false);
// Example: Define or import yourBoxArray
const yourBoxArray = [
  { image:"A1.jpg", name: 'Sonic Waves' },
  { image:"A2.jpeg", name: 'Vibe Lounge' },
  { image:"A3.jpeg", name: 'Groove Haven' },
  { image:"A4.jpeg", name: 'Echo Pulse' },
  { image:"A5.jpeg", name: 'Soul Harmonics' },
  { image:"A6.jpeg", name: 'Mood Beats' },
  { image:"A7.jpeg", name: 'Urban Pulse' },
  { image:"A8.jpeg", name: 'Chill Riffs' },
  { image:"A9.jpeg", name: 'Retro Wave' },
  { image:"A10.jpeg", name: 'Indie Chill' },
  { image:"A11.jpeg", name: 'Chill Riffs' },
  { image:"A12.jpg", name: 'Retro Wave' },
  { image:"A13.jpg", name: 'Indie Chill' },
  { image:"A14.jpeg", name: 'Chill Riffs' },
  { image:"A16.jpg", name: 'Retro Wave' },

];
const visibleBoxes = showAll ? yourBoxArray.length : 8;

  const handleToggleView = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const yourBoxArrayWithDimensions = yourBoxArray.slice(0, visibleBoxes).map((box, index) => ({
    ...box,
    index: index + 1,
  
  }));

  return (
    <div className={styles.artist}>
      <div className={styles.artist_data}>
        <div className={styles.artist_head}>
          <h1> Explore BeatPulse's Artistry Hub</h1>
        </div>
        <div className={`${styles.artist_name} ${showAll ? styles.showAll : ''}`}>
          {yourBoxArrayWithDimensions.map((box) => (
            <div className={styles.artist_box} key={box.index}>
              <Image
                className={styles.artist_img}
                src={`/${box.image}`}
                alt={box.name}
                layout="responsive" // Use layout="responsive" for dynamic sizing
      width={300} // Set a default width (adjust as needed)
      height={200} // Set a default height (adjust as needed)
              />
              <h2>{box.name}</h2>
            </div>
          ))}
        </div>
        <div className={styles.artist_btn}>
          <button onClick={handleToggleView}>
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default artist;