import React, { useState } from 'react';
import loginImg from "../images/Group 3@2x.png";
import { Link } from "react-router-dom";
import "../App.css";

function SignUp() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {

    if (!name || !dob || !role || !email || !password) {
      alert('Please fill in all the details.');
      window.location.href="/signup"
    }else{
          const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
          const empId = existingUsers.length + 1;

        const newUser = {
          id: empId,
          name: name,
          dob: dob,
          role: role,
          email: email,
          password: password
        };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

      }

  };

  return (
    <div>
      <div className='Total_Login'>
        <div className='Head'>
          <img src={loginImg} alt='logimg'/>
          <p>We are Electrict</p>
        </div>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='date' placeholder='DOB'value={dob} onChange={(e) => setDob(e.target.value)} />
        <input type='text' placeholder='Role' value={role} onChange={(e) => setRole(e.target.value)} />
        <input type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Link className='Button' to="/" onClick={handleSubmit}>SignUp</Link>
      </div>
    </div>
  );
}

export default SignUp;
