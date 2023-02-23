import React from "react";
import Album from "./Album";
import styles from "./AlbumList.module.css";

const AlbumList = ({ album, setAlbum }) => {
  // console.log(album);
  return (
    <div className={styles.AddAlbumList}>
      {album.map((a) => (
        <Album
          id={a.id}
          album={album}
          setAlbum={setAlbum}
          key={a.id}
          userId={a.userId}
          title={a.title}
        />
      ))}
    </div>
    // here we are goona map all the albums
  );
};

export default AlbumList;
