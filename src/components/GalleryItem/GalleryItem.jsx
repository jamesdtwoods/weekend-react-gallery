function GalleryItem ( {item} ) {
    const [isClicked, setIsClicked] = useState(false)

    const isClicked = () => {
        setIsClicked(!isClicked)
  }

return(
    <div id={item.id}>
        <img src={item.url}/>
    </div>
)
}

export default GalleryItem;



const [isNomNomNom, setIsNomNomNom] = useState(false)

  const toggleNomNomNom = () => {
    setIsNomNomNom(!isNomNomNom)
  }

  const displayText = () => {
    if (isNomNomNom) {
      return (
        <>
          NOM NOM NOM
          <br/>
          NOM NOM NOM
        </>
      )
    } else {
      return (
        <>
          {cereal.name}
          <br/>
          <em>{cereal.description}</em>
        </>
      )
    }
  }

  return (
    <li
      onClick={toggleNomNomNom}
      className={cereal.isTasty ? 'tasty' : ''}
    >
      {displayText()}
    </li>
  )
}