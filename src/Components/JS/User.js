import React, { useEffect, useState } from 'react'
import { Switch } from '@mui/material'
import '../CSS/User.css'

export default function User(props) {

  const [checked, setChecked] = useState(true);

  const handleChange = (idx) => {
    setChecked(!checked);
    if(checked) {
      document.querySelector(`#username-${idx}`).classList.add('checked');
    }
    else{
      document.querySelector(`#username-${idx}`).classList.remove('checked');
    }
  }

  useEffect(() => {}, [checked])

  return (
    <li className='user' id={`user-${props.idx}`} onClick={checked ? props.handleClick : null} >
      <div>
        <div className="bullet"></div>
        <div className="username" id={`username-${props.idx}`}>{props.user.name}</div>
        </div>
        <Switch checked={checked} onChange={() => handleChange(props.idx)} />
    </li>
  )
}
