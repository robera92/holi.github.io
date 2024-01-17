
import DisplayImage from "./DisplayImage"

const Layout2 = ({photos, changeViewPhoto}) => {

    
    const listItems = photos.map((photo) =>
        <div className="layout2 col-2" key={photo.id}>
            <div className="display_image">
                <DisplayImage photo={photo} changeViewPhoto={changeViewPhoto}></DisplayImage>
            </div>
            
        </div>
    );


    
    return (
        <>
        <h2>Layout2</h2>
        <div className="layout2 row">
            {listItems}
        </div>
        </>
    );
}
 
export default Layout2;