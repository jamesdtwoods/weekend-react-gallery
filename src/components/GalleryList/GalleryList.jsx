import GalleryItem from  '../GalleryItem/GalleryItem.jsx';

function GalleryList ( {gallery} ) {

    return(
        <div>
        {gallery.map(item => (
                <GalleryItem item={item} />
                ))}
        </div>
    )
}

export default GalleryList;