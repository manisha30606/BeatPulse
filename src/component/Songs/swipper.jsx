import React, { useRef, useState } from 'react';
import styles from "./page.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { IoSearchOutline } from "react-icons/io5";
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

// Import custom icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaHeart } from "react-icons/fa";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Swipper = () => {
  const swiperRef = useRef(null);
  const [song, setSong] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const getSong = async () => {
    try {
      let response = await fetch(`https://v1.nocodeapi.com/manisha_02/spotify/GKcybDwfUcyUAhta/search?q=${keyword}&type=track`);
      if (!response.ok) throw new Error("Network response was not ok");
      let convertData = await response.json();
      setSong(convertData.tracks.items); // Corrected to 'convertData.tracks.items'
    } catch (error) {
      console.error("Failed to fetch Songs:", error);
      setSong([]);
    }
  };

  return (
    <div className={styles.songs}>
      <div className={styles.song_head}>
        <h1>Songs</h1>
      </div>
      <div className={styles.search_area}>
        <input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          type="text"
          className={styles.search_data}
          placeholder="Search for songs..."
        />
        <IoSearchOutline onClick={getSong} className={styles.search_icon} />
      </div>

      <Swiper
        breakpoints={{
          476: {
            slidesPerView: 1,
          },
          598: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        navigation={false}
        pagination={{ type: 'fraction' }}
        className={styles.swiper}
      >
        {
          song.length > 0 ? (
            song.map((element, index) => {
              return (
                <SwiperSlide key={index} className={styles.slider}>
                  <div className={styles.slider_box}>
                    <div className={styles.slider_img}>
                      <Image
                        src={element.album.images[1]?.url}
                        alt={element.name}
                        className={styles.img}
                        width={300} // Adjust the width based on your design
                        height={300} // Adjust the height based on your design
                      />

                    </div>
                    <div className={styles.slider_data}>
                      <h1>{element.name}</h1>
                      <FaHeart />
                    </div>
                    <div className={styles.play_icons}>
                      {element.preview_url && (
                        <audio src={element.preview_url} controls className='w-100'></audio>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <div className={styles.center}>
              <p>No tracks available</p>
            </div>
          )
        }
      </Swiper>


      {/* Conditionally render the navigation buttons */}
      {song.length > 0 && (
        <div className={styles.slider_controler}>
          <div className={`swiper_button_prev ${styles.slider_arrow}`} onClick={handlePrev}>
            <IoIosArrowBack />
          </div>
          <div className={`swiper_button_next ${styles.slider_arrow}`} onClick={handleNext}>
            <IoIosArrowForward />
          </div>
        </div>
      )}
    </div>
  );
};

export default Swipper;
