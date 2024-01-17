
import DisplayImage from "./DisplayImage"

const Layout3 = ({photos, changeViewPhoto}) => {

    
    const listItems = photos.map((photo) =>
        <div className="layout3 col-6" key={photo.id}>
            <div className="display_image">
                <DisplayImage photo={photo} changeViewPhoto={changeViewPhoto}></DisplayImage>
            </div>
            
        </div>
    );


    
    return (
        <>
        <h2>layout3</h2>
        <div className="layout3 row">
            {listItems}
        </div>
        </>
    );
}
 
export default Layout3;