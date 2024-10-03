"use client"
import React from 'react'
import Image from 'next/image'
import styles from "./page.module.css"
import photo from "../../../public/pix1.jpg"
import pic from "../../../public/pix2.jpg"

const About = () => {
  return (
    <>
       <div className={styles.about}>
        <div className={styles.about_data}>
       <div className={styles.about_head}>
        <h1>About Beatpulse</h1>
       </div>
       <div className={styles.about_para}>
        <h2>Explore the Essence and Evolution of BeatPulse</h2>
       </div>
        <div className={styles.about_page1}>
          <div className={styles.page_data}>
            <h3>
            Explore BeatPulse: Your Musical Sanctuary
            </h3>
            <p>
            "At BeatPulse, music is more than sound; it's an emotion, a universal language connecting us all. In the evolving world of melodies, we stand as your ultimate destination. Each curated playlist is an experience, weaving the threads of your unique narrative. Join us in exploring the symphony of emotions, where every beat tells a story. Welcome to BeatPulse your sonic journey begins here."
            </p>
          </div>
          <div className={styles.page_img}>
            <Image src={photo} className={styles.imgs}></Image>
          </div>
        </div>

        <div className={styles.about_page1}>
        <div className={styles.page_img} >
            <Image src={pic} className={styles.imgs}></Image>
          </div>
          <div className={styles.page_data}>
            <h3>
             Our Story
            </h3>
            <p>
            Born out of a passion for immersive auditory experiences, BeatPulse was founded with the mission to redefine how you connect with music. We're not just a platform; we're a community that celebrates the diverse tapestry of sounds that shape our lives.<br/><br/>Our mission is to redefine the connection between individuals and music, weaving a tapestry of emotions. Join us in this sonic odyssey, where each beat echoes a chapter in our shared narrative. Welcome to the unfolding story of BeatPulse – where music becomes a powerful storyteller, uniting hearts and enriching lives."
            </p>
          </div>
          
        </div>
        </div>
       </div>
    </>
  )
}

export default About