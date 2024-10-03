import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from "./page.module.css";
import Pic from "../../../public/song.jpeg";
import Image from 'next/image';
import Link from 'next/link';
import { FaPlay, FaPause, FaHeart } from "react-icons/fa";

const Album = () => {
  const [songData, setSongData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Function to fetch song data
  const fetchSong = async () => {
    try {
      const response = await axios.get('https://v1.nocodeapi.com/manisha_02/spotify/GKcybDwfUcyUAhta/search?q=perfect&type=track');
      const track = response.data.tracks.items[0]; // Get the first track
      setSongData(track);
    } catch (error) {
      console.error('Error fetching the song data:', error);
    }
  };

  useEffect(() => {
    fetchSong();
  }, []);

  // Function to handle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className={styles.album}>
        <div className={styles.album_head}>
          <h1 className={styles.head}>Recent <span className={styles.unique}>Releases</span></h1>
          <p className={styles.para}> Dive into the Latest Releases Now!</p>
        </div>

        <div className={styles.album_data}>
          <div className={styles.album_left}>
            <Image src={Pic} className={styles.pic_img} alt="Album Cover" />
            <div className={styles.leda}>
              <h3>{songData ? songData.name : 'Loading...'}</h3>
              <div className={styles.leda_icons}>
                <button onClick={togglePlayPause}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
               
              </div>
            </div>
          </div>

          <div className={styles.album_right}>
            <div className={styles.reda}>
              <p>
                {songData
                  ? `‘Perfect’ is about a man telling his lady-love (whom he has known since they were children) that they’d always been in love, but as kids, they didn’t know what it was.He also tells her how much he looks forward to building a life with her.It’s definitely a good song for the person that Ed Sheeran wrote it for, and that person was his then girlfriend, now wife, Cherry Seaborn. ‘${songData.name}’ by ${songData.artists[0].name} is a beautiful track. Listen to it now!`
                  : 'Loading song details...'}
              </p>
            </div>
            <div className="reda_btn">
              <Link href="/playlist" className={styles.rbtn}>More Songs</Link>
            </div>
          </div>
        </div>

        {songData && (
          <audio ref={audioRef} src={songData.preview_url} />
        )}
      </div>
    </>
  );
};

export default Album;
