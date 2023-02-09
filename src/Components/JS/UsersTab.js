import React, { useEffect, useState } from 'react'
import '../CSS/UsersTab.css';
import PopUp from './PopUp';
import Searchbar from './Searchbar';
import User from './User';

export default function UsersTab(props) {

  const users = props.users;
  const [popupUser, setPopupUser] = useState(-1);
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const [disabledUsers, setDisabledUsers] = useState([]);

  const handleClick = idx => {
    setPopupUser(idx);
  }

  const updateKeyword = keyword => {
    const filtered = users.filter(user => `${user.name.toLowerCase()}`.includes(keyword.toLowerCase()) && keyword.trim() !== '');
    setKeyword(keyword);
    setResults(filtered);
  }

  const handleDisable = (idx, checked) => {
    if (disabledUsers.includes(users[idx]) && checked === false) {
      let i = disabledUsers.indexOf(users[idx]);
      disabledUsers.splice(i, 1);
    }
    else {
      disabledUsers.push(users[idx]);
    }
    setDisabledUsers(disabledUsers);
  }

  useEffect(() => { }, [popupUser, results, disabledUsers])

  return (
    <div className='users' onClick={() => {
      if (popupUser >= 0) {
        setPopupUser(-1);
      }
    }}>

      <div className="header">
        <div className="tabname">Users</div>
        <Searchbar keyword={keyword} search={updateKeyword} />
      </div>

      <div className="users-wrapper">
        <div className="list-head-wrapper">
          <div className="bullet" style={{ opacity: 0 }}></div><div className="list-head">
            User List
          </div>
        </div>

        <ul className='users-list checked-list'>
          {users.map((user, idx) => <User checked={true} disabledUsers={disabledUsers} searched={results.includes(user)} user={user} key={idx} idx={idx} handleClick={() => handleClick(idx)} onDisable={handleDisable} />)}
        </ul>

        <ul className='users-list non-checked-list'>
          {users.map((user, idx) => <User checked={false} disabledUsers={disabledUsers} searched={results.includes(user)} user={user} key={idx} idx={idx} handleClick={() => handleClick(idx)} onDisable={handleDisable} />)}
        </ul>
      </div>

      {popupUser >= 0 ? <PopUp user={props.users[popupUser]} handleClick={() => setPopupUser(-1)} /> : <div></div>}
    </div>
  )
}
