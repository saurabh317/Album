import React from 'react';
import styles from "./Album.module.css";

const Album = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
    </div>
  )
}

export default Album