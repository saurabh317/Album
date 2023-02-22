import React from 'react';
import styles from "./AddAlbum.module.css";
 

const AddAlbum = () => {
  return (
    <div className={styles.main}>
      <form>
        <div className={styles.title}>
          <label>Enter the title of the Album</label>
          <input type="text" className={styles.titleSpace} />
        </div>
        <button className={styles.btn}>ADD</button>
      </form>
    </div>
  )
}

export default AddAlbum;