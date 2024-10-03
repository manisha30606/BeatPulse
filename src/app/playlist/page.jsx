"use client";
import React, { useState } from 'react';
import styles from "./page.module.css";
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';

const Playlist = () => {
  const [showAll, setShowAll] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [keyword, setKeyword] = useState('');

  const visibleBoxes = showAll ? playlist.length : 4;

  const handleToggleView = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const getPlaylist = async () => {
    try {
      let response = await fetch(`https://v1.nocodeapi.com/manisha_02/spotify/GKcybDwfUcyUAhta/search?q=${keyword}&type=playlist`);
      if (!response.ok) throw new Error("Network response was not ok");
      let convertData = await response.json();
      setPlaylist(convertData.playlists.items);
    } catch (error) {
      console.error("Failed to fetch playlists:", error);
      setPlaylist([]);
    }
  };

  const playlistWithDimensions = playlist.slice(0, visibleBoxes).map((box, index) => ({
    ...box,
    index: index + 1,
  }));

  return (
    <>
      <div className={styles.playlist}>
        <div className={styles.playlist_data}>
          <div className={styles.playlist_head}>
            <h1>Discover Your Soundtrack Haven</h1>
          </div>

          <div className={styles.search_area}>
            <input
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              type="text"
              className={styles.search_data}
              placeholder="Search for playlists..."
            />
            <IoSearchOutline onClick={getPlaylist} className={styles.search_icon} />
          </div>

          <div className={`${styles.playlist_name} ${showAll ? styles.showAll : ''}`}>
            {playlistWithDimensions.map((box) => (
              <div className={styles.playlist_box} key={`${box.index}-${box.id}`}>
                <Image
                  className={styles.playlist_img}
                  src={box.images[0]?.url}
                  alt={box.name}
                  layout="responsive"
                  width={300}
                  height={200}
                />
                <h2>{box.name}</h2>
                {/* Uncomment if you want the link to open the playlist */}
                {/* {box.external_urls.spotify && (
                  <a href={box.external_urls.spotify} target="_blank" rel="noopener noreferrer">Open Playlist</a>
                )} */}
                {box.preview_url && (
                  <audio src={box.preview_url} controls className='w-100'></audio>
                )}
              </div>
            ))}
          </div>

          {/* Conditionally render the View More/View Less button */}
          {playlist.length > 4 && (
            <div className={styles.playlist_btn}>
              <button onClick={handleToggleView}>
                {showAll ? 'View Less' : 'View More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Playlist;
