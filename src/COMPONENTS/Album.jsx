import React, {  useState } from 'react';
import styles from "./Album.module.css";
import image from "../IMAGE/vcover2.png"

const Album = (props) => {
  const [name , setName] = useState(props.title);
  const [isEditable , SetIsEditable] = useState(false);
  
  const deleteHandler = async(e) =>{
    e.preventDefault();
    console.log(props.id);
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${props.id}`,{
      method: "DELETE",
      headers: {
      'Content-Type': 'application/json',
    },
   } )
    const data = await response.json();
    console.log(data);
    const afterDeleted =  props.album.filter((a)=> a.id !== props.id );
    props.setAlbum(afterDeleted);
  }
  
  
  const editHandler = async(e) =>{
    SetIsEditable(prev => !prev);
  }


  const saveHandler =async(e)=>{
    e.preventDefault();
    const bodyData = {userId:props.userId,id: props.id, title:name  }

     console.log(props.id)

    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${props.id}`,{
      method:"PUT",
      headers:{
        'Content-Type' :'application/json',
      },
      body:JSON.stringify(bodyData)
    })
    const data = await response.json();
  
     
    console.log('no updated album.......',props.album);

    const afterUpdate = props.album.map(a => {
      if(a.id === props.id){
        a.title = data.title;
      }
      return a;
    })

    console.log('after update  ........',afterUpdate)
    props.setAlbum(afterUpdate);
    SetIsEditable(prev => !prev);
  }





  const onChangeHandler =(e)=>{
    e.preventDefault();
    setName(e.target.value);
  }

 

  return (
    <div className={styles.Album}>
      <div className={styles.AlbumCard}>
        <img src={image} alt=""  />
        <div className={styles.content}>
        {isEditable  ? <input type="text" value={name} onChange={onChangeHandler}  className={styles.editableField}/> : <h2>{props.title}</h2> }
        <div className={styles.btn}>
          <button onClick={deleteHandler}>Delete</button>
          <button onClick={isEditable?saveHandler : editHandler}>{isEditable ? "save" : "edit"}</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Album