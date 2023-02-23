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
      setAlbum(data);
    } catch (error) {
      console.error(error);
    }
  });
  console.log( album);

  useEffect(() => {
    fetchData();
  }, []);


  const updateAlbum =(newData)=>{
    setAlbum(prev => [...prev, newData])
  }

  return (
    <div className={styles.home}>
      <AddAlbum updateAlbum={updateAlbum}/>
      <AlbumList album={album}/>
    </div>


  );
};

export default Home;
