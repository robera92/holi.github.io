import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../services/AuthServices"


const UserNav = ()=>{

    
  const [user, loading, error] = useAuthState(auth);

    const logout = ()=>{
      auth.signOut();
    }

    const navigate = useNavigate();

    useEffect(()=>{
      if(!user)navigate('/');
    },[user]);



    const isLoggedIn = user ? true : false;

    return(
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        {
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {isLoggedIn && user.email }
            {!isLoggedIn && 'Menu'}
          </a>
          <ul className="dropdown-menu">
              {isLoggedIn && 
              <>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#changeFormatModal" className="dropdown-item">Change layout</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link to="/" className="dropdown-item" onClick={logout}>Logout</Link></li>
              </>
              }
              {!isLoggedIn && 
              <>
              <li><Link className="dropdown-item" to="/">Login</Link></li>
              <li><Link className="dropdown-item" to="/register">Register</Link></li>
              </>
              }
            </ul>
        </li>
        }
      </ul>
    )
}

export default UserNav