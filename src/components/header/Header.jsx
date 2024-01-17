
import UserNav from "../userNav/UserNav";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg border-bottom mb-2">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Holiday photos</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <UserNav />
            </div>
        </div>
        </nav>
  </>
    );
}
 
export default Header;