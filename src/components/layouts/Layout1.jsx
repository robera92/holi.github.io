
import DisplayImage from "./DisplayImage"

const Layout1 = ({photos, changeViewPhoto}) => {

    
    const listItems = photos.map((photo) =>
        <div className="layout1 col-6" key={photo.id}>
            <div className="display_image">
                <DisplayImage photo={photo} changeViewPhoto={changeViewPhoto}></DisplayImage>
            </div>
            
        </div>
    );


    
    return (
        <>
        <h2>Layout1</h2>
        <div className="layout1 row">
            {listItems}
        </div>
        </>
    );
}
 
export default Layout1;