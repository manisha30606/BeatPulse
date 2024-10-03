"use client"
import React from 'react'
import style from "./page.module.css"
import { MdHome } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { TbMusicHeart } from "react-icons/tb";
import Link from 'next/link';
const Footer = () => {
  return (
    <>
    <div className={style.footer}>
     
        <div className={style.name}>
          <h2>BeatPulse</h2>
          <p>Unleash the Rhythm of Your Soul with Every Note.</p>
        </div>

        <div className={style.icons}>
          <Link href="/" className={style.icon}><MdHome/></Link>
          <Link href="/about" className={style.icon}><IoPerson/></Link>
          <Link href="/playlist" className={style.icon}><RiPlayListFill/></Link>
          
          <Link href="/artist" className={style.icon}><TbMusicHeart/></Link>
        </div>

    </div>
    </>
  )
}

export default Footer