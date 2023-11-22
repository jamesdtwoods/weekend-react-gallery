import GalleryItem from  '../GalleryItem/GalleryItem.jsx';

function GalleryList ( {gallery} ) {

    return(
        <div>
        {gallery.map(item => (
                <GalleryItem item={item} key={item.id} />
                ))}
        </div>
    )
}

export default GalleryList;