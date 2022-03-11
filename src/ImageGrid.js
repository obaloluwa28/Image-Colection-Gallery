import React from 'react'
import useFirestore from './comps/Hooks/useFirestore'
import './ImageGrid.css'

const ImageGrid = ({Img}) => {
    const {docss} = useFirestore('image')

    console.log(docss)
  return (
    <div className="img-container">
        {docss && docss.map(item => (
            <div className="img-wraap" key={item.id} onClick={() => Img(item.url)}>
                {<img id="img" src={item.url} alt="productImage" />}
            </div>
        ))}
    </div>
  )
}

export default ImageGrid