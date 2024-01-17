import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth } from "../../services/AuthServices"
import AddPhoto from "../modals/AddPhoto";
import ChangeFormat from "../modals/ChangeFormat"
import ViewPhoto from "../modals/ViewPhoto";
import { getAllPhotos } from "../../services/PhotoServices";
import AddPhotoButton from "./AddPhotoButton";
// import layouts
import DefaultLayout from "../layouts/Default";
import Layout1 from "../layouts/Layout1";
import Layout2 from "../layouts/Layout2";
import Layout3 from "../layouts/Layout3";

const Home = () => {
 
    const [photos, setPhotos] = useState([]);
    const [viewPhoto, setViewPhoto] = useState();
    const [layout, setLayout] = useState('default');

    const [user, loading, error] = useAuthState(auth);

    useEffect(()=>{
        if(loading) return;
        if(user){
        getAllPhotos(photos=>
            setPhotos(photos), user
        )}
    },[user, loading])

    const handleChangeViewPhoto = (viewPhoto) => {
        setViewPhoto(viewPhoto);
    }

    const handleChangeLayout = (layout) => {
        setLayout(layout);
    }


    let showDefaultDisplay;
     if(layout == 'layout1') {
        showDefaultDisplay = <Layout1 photos={photos} changeViewPhoto={handleChangeViewPhoto}/>;
    } else if(layout == 'layout2') {
        showDefaultDisplay = <Layout2 photos={photos} changeViewPhoto={handleChangeViewPhoto}/>;
    }  else if(layout == 'layout3') {
        showDefaultDisplay = <Layout3 photos={photos} changeViewPhoto={handleChangeViewPhoto}/>;
    }
    else{
        showDefaultDisplay = <DefaultLayout photos={photos} changeViewPhoto={handleChangeViewPhoto}/>;
    }
    

    return (
        <>
        <div className="d-block mb-2">
        <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#addPhotoModal">
            Add photo
         </button>
         <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#changeFormatModal">
            Change layout
         </button>
         </div>
        
         <div>
            {photos.length == 0 && <AddPhotoButton/>}
            {photos.length > 0 && showDefaultDisplay}
         </div>

        <ViewPhoto photo={viewPhoto}/>
        <AddPhoto />
        <ChangeFormat changeLayout={handleChangeLayout}/>
        </>
        
    );
}
 
export default Home;