import React from 'react';

function User({ user }) {
  return (
    <div className='Total_User_Card'>
      <div className='User_Count'>
        <p>{user.id}</p>
      </div>
      <div className='User_Details'>
        <p>EMP ID  &nbsp;: &nbsp;&nbsp;&nbsp;&nbsp; <span id='count'>{user.id}</span></p>
        <p>Name  &nbsp;  &nbsp;: &nbsp;&nbsp;&nbsp;&nbsp; <span id='name'>{user.name}</span></p>
        <p>DOB    &nbsp; &nbsp;  &nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id='dob'>{user.dob}</span></p>
        <p>Role   &nbsp; &nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp; <span id='role'>{user.role}</span></p>
      </div>
    </div>
  );
}

export default User;
