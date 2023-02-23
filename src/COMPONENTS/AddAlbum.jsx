import React from 'react';
import styles from "./AddAlbum.module.css";
import { useRef } from 'react';
 

const AddAlbum = (props) => {
  const TitleRef = useRef(null);
  
  const PostRequestHandler = async(e)=>{
  e.preventDefault();

    console.log('Clicked!');

    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`, {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify({title: TitleRef.current.value})
    });

    console.log("end request!")

    const data = await response.json();

    console.log(data);

    props.updateAlbum({...data, title: TitleRef.current.value}) 
  }

  return (
    <div className={styles.main}>
      <form>
        <div className={styles.title}>
          <label>Enter the title of the Album</label>
          <input ref={TitleRef} type="text" className={styles.titleSpace} />
        </div>
        <button onClick={PostRequestHandler} className={styles.btn}>ADD</button>
      </form>
    </div>
  )
}

export default AddAlbum;