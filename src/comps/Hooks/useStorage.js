import {useState, useEffect} from 'react'
import { projectStorage, projectFirestore, timestamp } from '../Firebase/config'
import { ref, uploadBytesResumable,  getDownloadURL  } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect (() =>{
        // const storageeRef = ref(projectStorage);
        const storageRef = ref(projectStorage, file.name)
        // Upload the file and metadata
        const uploadTask = uploadBytesResumable(storageRef, file);
        const collectionRef = collection(projectFirestore, 'image')

        uploadTask.on('state_changed', (snap) =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () =>{
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                const createdAt = timestamp
                // collectionRef.add({downloadURL, createdAt})
                addDoc(collectionRef, {
                    url: downloadURL,
                    createdAt: createdAt
                })
                setUrl(`Url: ${downloadURL}`)
            });
        }) 
    },[file])

  return {progress, url, error}
}

export default useStorage