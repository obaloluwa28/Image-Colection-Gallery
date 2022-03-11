import React, {useState} from 'react';
import Title from './comps/Title';
import Upload from './comps/Upload';
import ImageGrid from './ImageGrid';
import './App.css'
import Modal from './Modal';

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [toggle, setToggle] = useState(false)

  const changeToggle = () =>{
    setToggle(!toggle)
  }

  const ImageClicked = (incoming) =>{
    console.log(`IncomingUrl: ${incoming}`)
    setToggle(true)
    setSelectedImg(incoming)
  }
  
  return (
    <div className="App-container">
      <Title/>
      <Upload />
      <ImageGrid Img={ImageClicked} />
      {toggle && <Modal clickedImg={selectedImg} imgToggle={changeToggle}/>}
    </div>
  );
}

export default App;
