import { useState } from 'react';

function GalleryItem ( {item} ) {
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

return(
    <>
    <div data-testid="galleryItem" id={item.id} >
        <div data-testid="toggle" onClick={toggleClicked}>
            <h3>{item.title}</h3>
            {displayItem()}
        </div>
    </div>
    </>
)
}

export default GalleryItem;

