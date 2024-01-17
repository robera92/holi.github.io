import DisplayImage from "./DisplayImage"



const DefaultLayout = ({photos, changeViewPhoto}) => {

    
    const listItems = photos.map((photo) =>
    <div className="col-4" key={photo.id}>
        <div className="image_container" key={photo.id}>
            <DisplayImage photo={photo} changeViewPhoto={changeViewPhoto}></DisplayImage>
        </div>
    </div>
    );


    

    return (
        <>
        <h2>Default layout</h2>
        <div className="default_layout">
            <div className="row">{listItems}</div>
        </div>
        </>
    );
}
 
export default DefaultLayout;