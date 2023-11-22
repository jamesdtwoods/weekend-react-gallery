import GalleryItem from  '../GalleryItem/GalleryItem.jsx';

function GalleryList ( {gallery, getGallery} ) {

    return(
        <div data-testid="galleryList" >
        {gallery.map(item => (
                <GalleryItem item={item} key={item.id} getGallery={getGallery} />
                ))}
        </div>
    )
}

export default GalleryList;