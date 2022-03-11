import React, {useEffect} from 'react'
import useStorage from './Hooks/useStorage'
import '../index.css'

const Progressbar = ({file, setFile}) => {
    const {url, progress} = useStorage(file)
    console.log(progress, url)

    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url])
  return (
    <div className="progress-bar" style={{width: progress + '%'}}></div>
  )
}

export default Progressbar