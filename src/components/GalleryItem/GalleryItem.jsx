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
                <p>
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
    <div id={item.id} onClick={toggleClicked}>
        {displayItem()}
    </div>
)
}

export default GalleryItem;

