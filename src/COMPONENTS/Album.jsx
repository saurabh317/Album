import React from 'react';
import styles from "./Album.module.css";
import image from "../IMAGE/vcover2.png"

const Album = (props) => {
  return (
    <div className={styles.Album}>
      <div className={styles.AlbumCard}>
        <img src={image} alt=""  />
        <h2>AlbumName: {props.title}</h2>
      </div>
    </div>
  )
}

export default Album