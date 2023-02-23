import React from 'react'
import Album from './Album';
import styles from "./AlbumList.module.css";

const AlbumList = ({album}) => {
  // console.log(album);
  return (
    <div className={styles.AddAlbumList}>
        {album.map(a =>( <Album  key={a.id} title={a.title}/>)) }
    </div>
    // here we are goona map all the albums
  )
}

export default AlbumList