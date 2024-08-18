import React from 'react'
import  "../adduser/add.css"
import { Link } from 'react-router-dom'

const Edit = () => {
  return (
    <div className='addUser'>
    <Link to={"/"}>Back</Link>
    <h3>Update user </h3>
    <form className='addUserForm'>
        <div className="inputgroup">
            <label htmlFor='fname'>First Name</label>
            <input type="text" id="fname" name="fname" autoComplete='off' placeholder='First Name'></input>
        </div>
        <div className='inputgroup'>
            <label htmlFor='lname'>Last Name</label>
            <input type="text" id="lname" name="lname" autoComplete='off' placeholder='Last Name'></input>
        </div>
        <div className='inputgroup'>
            <label htmlFor='email'>Email</label>
            <input type="email" id="email" name="email" autoComplete='off' placeholder='Email'></input>
        </div>
     
        <div className='inputgroup'>
            <button type="submit">UPDATE USER</button>
        </div>
        
    </form>
</div>
  )
}

export default Edit