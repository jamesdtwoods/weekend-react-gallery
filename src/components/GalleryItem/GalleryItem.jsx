import { useState } from 'react';
import axios from 'axios';

function GalleryItem ( {item, getGallery} ) {
    const [isClicked, setIsClicked] = useState(false)

    const toggleClicked = () => {
        setIsClicked(!isClicked)
    }

    const displayItem = () => {
        if (isClicked) {
          return (
            <>
                <p data-testid="description">
                    {item.description}
                </p>
            </>
          )
        } else {
          return (
            <>
                <img src={item.url}/>
            </>
          )
        }
      }

    const onLike = () => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${item.id}`
        })
        .then(response => {
          getGallery();
        })
        .catch(err => {
          alert('Error Adding Like');
          console.log(err);
        })
    };


return(
    <>
    <div data-testid="galleryItem" id={item.id} >
        <div data-testid="toggle" onClick={toggleClicked}>
            <h3>{item.title}</h3>
            {displayItem()}
        </div>
        <button data-testid="like" onClick={onLike} >👍</button>
        <p>{item.likes} people like this</p>
    </div>
    </>
)
}

export default GalleryItem;

