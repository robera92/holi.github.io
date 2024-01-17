import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, registerWithEmailAndPassword} from "../../services/AuthServices"

const Register = () => {

    const [userData, setUserData] = useState({
        name:'',
        email:'',
        password1:'',
        password2:'',
    })

    const [alert, setAlert] = useState(null);

    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setAlert(null);
        
        const value = e.target.value;

        setUserData({
            ...userData,
            [e.target.name]:value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(userData)
        if(userData.password1 !== userData.password2){
            setAlert('Passwords don\'t match!');
        }else{

            try {
                setAlert(null);
                await registerWithEmailAndPassword(userData.name, userData.email, userData.password1);
                console.log('Registration successful');
              } catch (error) {
                setAlert(error.message);
              }

        }
        
    }

    useEffect(()=>{
        if(loading) return;
        if(user) navigate('/works')
    },[user,loading])


    return (
        <>
        <form className="mt-4" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" onChange={handleChange} aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Your name</label>
            <input type="text" name="name" className="form-control" onChange={handleChange} id="exampleInputName1"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password1" onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
            
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Repeat Password</label>
            <input type="password" name="password2" onChange={handleChange} className="form-control" id="exampleInputPassword2"/>
        </div>
        {alert && <div className="alert alert-danger my-2" role="alert">{alert}</div>}
        <button type="submit" className="mb-3 btn btn-primary">Submit</button>
        <div className="mb-3">
            <p>Already registered user? <Link to="/">Login</Link>.</p>
        </div>
        </form>
        </>
    );
}
 
export default Register;