import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from  '../GalleryList/GalleryList.jsx';
import GalleryForm from  '../GalleryForm/GalleryForm.jsx';

function App() {
  let [gallery, setGallery] = useState([]);
   //On load, get gallery
   useEffect(() => {
    getGallery()
  }, [])

  const getGallery = () => {
    axios.get('/gallery')
      .then(response => {
        setGallery(response.data)
      })
      .catch(err => {
        console.log('error getting gallery');
        console.log(err);
      })
  }

    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>
        <GalleryForm getGallery={getGallery} />
        <GalleryList gallery={gallery} getGallery={getGallery} />
      </div>
    );
}

export default App;
