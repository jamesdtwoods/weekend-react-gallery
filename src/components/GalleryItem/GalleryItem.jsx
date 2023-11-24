import { useState } from 'react';
import axios from 'axios';

function GalleryItem ( {item, getGallery} ) {
    const values = {
        height: 100,
        width: 100
    }

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
                <img src={item.url}></img>
            </>
          )
        } else {
          return (
            <>
                <img style={{ height: values.height, width: values.width }} src={item.url}/>
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


    const onDelete = () => {
      axios({
          method: 'DELETE',
          url: `/gallery/${item.id}`
      })
      .then(response => {
        getGallery();
      })
      .catch(err => {
        alert('Error Deleting Post');
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
        <button onClick={onDelete} >Remove Post ❌</button>
    </div>
    </>
)
}

export default GalleryItem;

