"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './page.module.css';
import { GrMenu } from 'react-icons/gr';
import { FaSearch } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
  },
  {
    id: 3,
    title: 'Playlist',
    url: '/playlist',
  },
  {
    id: 4,
    title: 'Artist',
    url: '/artist',
  },
  {
    id: 5,
    title: 'Songs',
    url: '/songs',
  },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const[isSearchOpen,setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  }

  const closeSearch = () =>{
    setSearchOpen(false);
  }


  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
         
          <div className={styles.logos}>
            <Link href="/" className={styles.logo}>
              BeatPulse
            </Link>
          </div>

          <div className={styles.menu}>
            {/* <FaHeart className={styles.h} /> */}
            {isMenuOpen ? (
              <IoCloseSharp className={styles.c} onClick={toggleMenu} />
            ) : (
              <GrMenu className={styles.m} onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.menus} ${isMenuOpen ? styles.activePopup : ''}`}>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link} onClick={closeMenu}>
              {link.title}
            </Link>
          ))}
        </div>

        {/* <div className={`${styles.search} ${isSearchOpen ? styles.activePopup : ''}`}>
       
          <h1>Search</h1>
      
    
      </div>
     */}
      </div>

     
    </>
  );
};

export default Navbar;