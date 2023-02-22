import React from 'react'
import Album from './Album'

const AlbumList = (props) => {
  return (
    <div>
        {props.album.map((AlbuM) =>{
            <Album
            key={AlbuM.id}
            title={AlbuM.title}
            />
        }) }
    
    </div>
    // here we are goona map all the albums
  )
}

export default AlbumList