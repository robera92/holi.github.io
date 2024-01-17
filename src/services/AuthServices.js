import firebase from "../firebase";
import {app} from "../firebase";
import 'firebase/compat/auth';

const auth = app.auth();
const db = app.firestore();

const registerWithEmailAndPassword = async (name, email, password) =>{
    try{
        const res = await auth.createUserWithEmailAndPassword(email, password);
    }catch(err){
        throw err;
    }
}

const signInWithEmailAndPassword = async (email, password) =>{
    try{
        await auth.signInWithEmailAndPassword(email, password)
    }catch(err){
        throw err;
    }
}

export default firebase;

export {
    auth,
    db,
    registerWithEmailAndPassword,
    signInWithEmailAndPassword,
}
