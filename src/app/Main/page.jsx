"use client"
import React from 'react';
import styles from './page.module.css';
import back from "../../../public/logo.avif";
import Combo from '../../component/combo/combo';
import Button from "../../component/button/but1";
import Intro from "../../component/intro/intro"
import Album from '@/component/Album/page';


const Main = () => {
  return (
    <>

      <div className={styles.container}><div
        style={{
          backgroundImage: `url(${back.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      >
        <div className={styles.main_data}>
          <div className={styles.head}>
            <h1>BeatPulse</h1>

          </div>

          <div className={styles.para}>
            <h2> Unleash the Rhythm of Your Soul with Every Note.
            </h2>
          </div>
        </div>
      </div>
      </div>
      <Intro />
      <Album />
      <Combo />
    </>
  );
};

export default Main;
