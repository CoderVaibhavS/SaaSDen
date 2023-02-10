import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GroupsTab from './Components/JS/GroupsTab';
import Sidebar from './Components/JS/Sidebar';
import UsersTab from './Components/JS/UsersTab';

function App() {

  const [users, setUsers] = useState([]);
  const [images, setImages] = useState([]);

  const getUsers = async () => {
    try {
      let usersData = await fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' });
      let users = await usersData.json();
      images.push('');
      setImages(images)
      setUsers(users);
    }
    catch (err) {
      alert("Error in fetching data. Please check your network connection");
    }
  }

  useEffect(() => { getUsers() }, []);

  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={<UsersTab users={users} images={images} />}></Route>
        <Route path='/groups' element={<GroupsTab users={users} />}></Route>
        <Route path='/lorem' element={<div>lorem</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
