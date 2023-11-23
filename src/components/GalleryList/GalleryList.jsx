import GalleryItem from  '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';

function GalleryList ( {gallery, getGallery} ) {

    return(
        <div data-testid="galleryList" className="gallery-list" >
        {gallery.map(item => (
                <GalleryItem item={item} key={item.id} getGallery={getGallery} />
                ))}
        </div>
    )
}

export default GalleryList;