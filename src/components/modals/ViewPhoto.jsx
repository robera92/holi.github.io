const ViewPhoto = ({photo}) => {

    return (
        <div className="modal fade" id="ViewPhotoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form>
              <div className="modal-body d-flex justify-content-center">
                <img src={photo} className="img-fluid"/>
              </div>
              </form>
            </div>
          </div>
        </div>
    );
}
 
export default ViewPhoto;