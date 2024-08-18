import React , {useState}from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./add.css";
import axios from "axios";
import toast from 'react-hot-toast';     // this is the component 



const Add = () => {

    const users = {
        fname:"",
        lname:"",
        email:"",
        password:""
    }
    const [user,setUser] = useState(users);
    const navigate = useNavigate();             /// this hook will redirect User to home page   after sending data 
    const inputHandler = (e) =>{
        const {name,value}= e.target;
        setUser({...user,[name]:value});
        //console.log(user);
        
         
        
    }

    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:3000/api/create",user)
        .then((response)=>{
            toast.success(response.data.msg,{position:"top-right"})
            navigate("/")                                              // here this will navigate to home page 
        }).catch(error=>console.log(error))
    }

    

  return (

    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add new user </h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputgroup">
                <label htmlFor='fname'>First Name</label>
                <input type="text" onChange={inputHandler} id="fname" name="fname" autoComplete='off' placeholder='First Name'></input>
            </div>
            <div className='inputgroup'>
                <label htmlFor='lname'>Last Name</label>
                <input type="text"  onChange={inputHandler} id="lname" name="lname" autoComplete='off' placeholder='Last Name'></input>
            </div>
            <div className='inputgroup'>
                <label htmlFor='email'>Email</label>
                <input type="email"  onChange={inputHandler} id="email" name="email" autoComplete='off' placeholder='Email'></input>
            </div>
            <div className='inputgroup'>
                <label htmlFor='password'>Password</label>
                <input type="password"  onChange={inputHandler} id="password" name="password" autoComplete='off' placeholder='Password'></input>
            </div>
            <div className='inputgroup'>
                <button type="submit">ADD USER</button>
            </div>
            
        </form>
    </div>
  )
}

export default Add;