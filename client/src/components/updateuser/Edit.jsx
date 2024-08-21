import React, { useEffect ,useState  } from 'react'
import  "../adduser/add.css"
import { Link, useParams ,useNavigate} from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const Edit = () => {
    const users = {
        fname : "",
        lname : "",
        email : ""
    }
    const {id} = useParams();
    const [user,setUser] = useState(users);   // using  hook here 
    const navigate = useNavigate();

    const inputChangeHandler = (e)=>{
    const{name,value} = e.target;
    setUser({...user, [name]:value});
    console.log(user);
    
}
useEffect(()=>{
    axios.get(`https://crud-application-backend-j3l3.onrender.com/api/getone/${id}`)    /// here we getting the api data that we want to update.
    .then((response)=>{
      //   console.log(response); // to get data on console
    setUser(response.data);
        
    })
    .catch((error)=>{
        console.log(error);
    })
        },[id])
// Now here we will update the data  , below is the code for that 

const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:3000/api/update/${id}`, user)
    .then((response)=>{
        toast.success(response.data.msg,{position:"top-right"})
        navigate("/")                                              // here this will navigate to home page 
    }).catch(error => console.log(error))
}

  return (
    <div className='addUser'>
    <Link to={"/"}className="backbutton"><i class="fa-solid fa-arrow-left"></i>
    </Link>
    <h2>Update user </h2>
{/* here on line no. 54 we are using the submitform  */}
    <form className='addUserForm' onSubmit={submitForm}>   
        <div className="inputgroup">
            <label htmlFor='fname'>First Name</label>
            <input type="text"value={user.fname} onChange={inputChangeHandler} id="fname" name="fname" autoComplete='off' placeholder='First Name'></input>
        </div>
        <div className='inputgroup'>
            <label htmlFor='lname'>Last Name</label>
            <input type="text" value={user.lname}  onChange={inputChangeHandler} id="lname" name="lname" autoComplete='off' placeholder='Last Name'></input>
        </div>
        <div className='inputgroup'>
            <label htmlFor='email'>Email</label>
            <input type="email" value={user.email} onChange={inputChangeHandler} id="email" name="email" autoComplete='off' placeholder='Email'></input>
        </div>
     
        <div className='inputgroup'>
            <button type="submit">UPDATE USER</button>
        </div>
        
    </form>
</div>
  )
}

export default Edit