import firebase from '../firebase';
import { serverTimestamp } from "firebase/firestore";

export const storePhoto = async (data)=>{
   
    data = {
            ...data,
            timestamp: serverTimestamp()
    }

    try{
        await firebase
        .firestore()
        .collection('photos')
        .add(data);
    }catch(err){
        throw err;
    }

    
}

export const getAllPhotos = (onPhotosChanged,user)=>{
    firebase
    .firestore()
    .collection('photos')
    .where("uid","==",user?.uid)
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
        const newPhoto = snapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data()
        }))

        onPhotosChanged(newPhoto)

    })
}

export const deletePhoto = (id)=>{
    firebase
    .firestore()
    .collection('photos')
    .doc(id)
    .delete()
}