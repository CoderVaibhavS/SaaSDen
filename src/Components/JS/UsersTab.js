import React, { useEffect, useState } from 'react'
import '../CSS/UsersTab.css';
import PopUp from './PopUp';
import User from './User';

export default function UsersTab() {

  const [users, setUsers] = useState([]);
  const [popupUser, setPopupUser] = useState(-1);

  const getUsers = async () => {
    try {
      let usersData = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' });
      let users = await usersData.json();
      setUsers(users);
    }
    catch (err) {
      alert("Error in fetching data. Please check your network connection");
    }
  }

  useEffect(() => getUsers, []);

  const handleClick = idx => {
    setPopupUser(idx);
  }

  useEffect(() => {}, [popupUser])

  return (
    <div className='users' onClick={() => {
      if (popupUser >= 0) {
        setPopupUser(-1);
      }
    }}>
      <div className="users-wrapper">
        <div className="list-head-wrapper"><div className="bullet" style={{ opacity: 0 }}></div><div className="list-head">User List</div></div>
        <ul className='users-list'>
          {users.map((user, idx) => <User user={user} key={idx} idx={idx} handleClick={() => handleClick(idx)} />)}
        </ul>
      </div>

      {popupUser >= 0 ? <PopUp user={users[popupUser]} handleClick={() => setPopupUser(-1)} /> : <div></div>}
    </div>
  )
}
