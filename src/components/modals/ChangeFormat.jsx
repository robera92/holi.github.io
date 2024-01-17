const ChangeFormat = ({changeLayout}) => {

    return (
        <div className="modal fade" id="changeFormatModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Change the layout</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form>
              <div className="modal-body">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal" onClick={ ()=> {changeLayout('default'); }}>Default</button>
                    <button type="button"  className="btn btn-outline-success" data-bs-dismiss="modal" onClick={ ()=> {changeLayout('layout1'); }}>Layout 1</button>
                    <button type="button"  className="btn btn-outline-success" data-bs-dismiss="modal" onClick={ ()=> {changeLayout('layout2'); }}>Layout 2</button>
                    <button type="button"  className="btn btn-outline-success" data-bs-dismiss="modal" onClick={ ()=> {changeLayout('layout3'); }}>Layout 3</button>
                  </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
              </form>
            </div>
          </div>
        </div>
    );
}
 
export default ChangeFormat;