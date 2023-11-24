import axios from 'axios';
import { useState } from 'react';

function GalleryForm ( {getGallery} ) {
    let [newItemTitle, setNewItemTitle] = useState('');
    let [newItemDescription, setNewItemDescription] = useState('');
    let [newItemUrl, setNewItemUrl] = useState('');


    const addItem = () => {
        axios.post('/gallery', { 
            url: newItemUrl,
            title: newItemTitle, 
            description: newItemDescription 
        })
          .then(response => {
            // clear inputs
            setNewItemTitle('');
            setNewItemDescription('');
            setNewItemUrl('');
            getGallery();
          })
          .catch(err => {
            alert('Error Adding picture');
            console.log(err);
          })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItemTitle) {
          addItem();
        }
        else {
          alert('The new picture needs a titel!');
        }
    }
    return (
        <>
            <h2>Add a new image</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newItemTitle}
                        onChange={(evt) => setNewItemTitle(evt.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newItemDescription}
                        onChange={(evt) => setNewItemDescription(evt.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="url"
                        value={newItemUrl}
                        onChange={(evt) => setNewItemUrl(evt.target.value)}
                    />

                    <button type="submit">Add Picture</button>
                </form>
        </>
    )
}

export default GalleryForm;