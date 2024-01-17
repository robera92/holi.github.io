import {Link, useNavigate} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, signInWithEmailAndPassword} from "../../services/AuthServices"
import { useEffect, useState } from "react";

const Login = () => {

    const navigate = useNavigate();

    const [user, loading, error] = useAuthState(auth);
    const [alert, setAlert] = useState('');
    const [userData, setUserData] = useState({ email:'', password:'' });

    const handleChange = (e)=>{
        setAlert('');
        const value = e.target.value;
        setUserData({
            ...userData,
            [e.target.name]:value
        })
    }

    useEffect(()=>{
        if(loading)return;
        if(user)navigate('/home');
    },[user,loading]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            setAlert('');
            console.log(userData);
            await signInWithEmailAndPassword(userData.email, userData.password);
        }catch (error) {
            setAlert(error.message);
          }
    }

    return (
        <>
        <form className="mt-4" onSubmit={handleSubmit}>
        <h2>Welcome! Login to continue..</h2>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1"  onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
        </div>
        {alert && <div className="alert alert-danger my-2" role="alert">{alert}</div>}
        <button type="submit" className="mb-3 btn btn-primary">Submit</button>
        <div className="mb-3">
            <p>No account? <Link to="/register">Register now</Link>.</p>
        </div>
        </form>
        </>
    );
}
 
export default Login;