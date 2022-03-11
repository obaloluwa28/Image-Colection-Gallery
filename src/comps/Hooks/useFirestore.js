import {useState, useEffect} from 'react'
import { projectFirestore } from '../Firebase/config'
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";

const useFirestore = (collections) =>{
    console.log(collections)
    const [docss, setDocss] = useState([])

    useEffect(()=>{
        const colRef = collection(projectFirestore, collections)
        const queryRef = query(colRef, orderBy('createdAt', 'desc'))
        const onsnap = onSnapshot(queryRef, (snapshot) => {
            let documents = [];
            snapshot.docs.forEach((doc) =>{
                documents.push({...doc.data(), id: doc.id})
            });
            setDocss(documents)
            console.log(documents)
        })
        return () => onsnap()
    },[collections])

    console.log(`Olaniyi: ${JSON.stringify(docss)}`)
    return{docss}
}

export default useFirestore