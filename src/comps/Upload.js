import React, {useState} from 'react'
import Progressbar from './Progressbar';
import '../index.css'

const Upload = () => {
    const [file, setFile] = useState(null);
    const [pdfFileError, setPdfFileError]=useState('');

    const types = ['image/png','image/jpg','image/jpeg']

    const changeHandler = (e) =>{
        let selected = e.target.files[0]
        console.log(selected)

        if(selected && types.includes(selected.type)){
            setFile(selected)
            setPdfFileError('')
        }else{
            setFile(null)
            setPdfFileError("Pls select a valid png/jpg/jepg file")
        }
    } 

  return (
      <form className="Upload-container">
          <input type="file" onChange={changeHandler}/>
          <div className="output">
              {pdfFileError && <div className="error">{pdfFileError}</div>}
              {file && <div className="filename">{file.name}</div>}
              {file && <Progressbar file={file} setFile={setFile}/>}
          </div>
      </form>
  )
}

export default Upload