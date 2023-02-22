import React, { useState } from "react";
import styles from "./Home.module.css";
import { useEffect, useCallback } from "react";
import AddAlbum from "../../COMPONENTS/AddAlbum";
import AlbumList from "../../COMPONENTS/AlbumList";

const Home = () => {
  const [ album, setAlbum ] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums`
      );
      const data = await response.json();
      console.log(data);


      setAlbum(data);
    } catch (error) {
      console.error(error);
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.home}>
      <AddAlbum />
      <AlbumList album={album}/>
    </div>


  );
};

export default Home;
