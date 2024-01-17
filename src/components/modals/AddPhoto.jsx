import {useEffect, useState, useRef} from "react";
import {storePhoto} from "../../services/PhotoServices"
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../services/AuthServices"

const AddPhoto = () => {

    const [photo, setPhoto] = useState('');
    const [alert, setAlert] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const closeModal = useRef([]);

    const handleChange = (e)=>{
        const value = e.target.value;
        setPhoto(value);
    }

    useEffect( () =>{
        setAlert('');
    }, [photo]);

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const checkIfLegitImage = await checkImage(photo);
  
          if (!checkIfLegitImage) {
              setAlert('Not an image URL!');
          } else {
              storePhoto({ uid: user.uid, url: photo });
              setPhoto('');
              closeModal.current.click();
          }
      } catch (error) {
          setAlert('Not valid image!');
      }
  };


    const checkImage = async (url) => {

      if(url.match(/\.(jpeg|jpg|gif|png)$/) === null)return false;

      const res = await fetch(url, {method:'HEAD'});
      const buff = await res.blob();
      return buff.type.startsWith('image/');
    }


    return (
        <div className="modal fade" id="addPhotoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Add new photo</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              {alert && <div className="d-block"><div className="alert alert-danger m-3 mb-0" role="alert">{alert}</div></div>}
              <form onSubmit={handleSubmit}>
              <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Photo URL</label>
                <input type="text" onChange={handleChange} value={photo} name="photo" autoComplete="off" className="form-control" id="exampleFormControlInput1" placeholder="example.com/image.jpg"/>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" ref={closeModal} data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
              </form>
            </div>
          </div>
        </div>
    );
}
 
export default AddPhoto;