import React, { useEffect, useState } from 'react'
import { Switch } from '@mui/material'
import '../CSS/User.css'

export default function User(props) {

  const [checked, setChecked] = useState(props.checked ? true : false);

  const handleChange = (idx) => {
    setChecked(!checked);
    if (checked) {
      document.querySelector(`#user-${idx}-checked`).classList.add('checked');
      document.querySelector(`#user-${idx}-notchecked`).classList.add('checked');
    }
    else {
      document.querySelector(`#user-${idx}-checked`).classList.remove('checked');
      document.querySelector(`#user-${idx}-notchecked`).classList.remove('checked');
    }
    props.onDisable(idx, checked)
  }

  useEffect(() => { }, [checked])

  return (
    <li
      className={props.searched ? 'user searched' : 'user'}
      id={props.checked ? `user-${props.idx}-checked` : `user-${props.idx}-notchecked`}>
      <div>
        <div className="bullet"></div>
        <div className="username" id={`username-${props.idx}`}
      onClick={props.checked ? props.handleClick : null}>{props.user.name}</div>
      </div>
      <Switch
        checked={props.checked ? true : false}
        onChange={() => handleChange(props.idx)} />
    </li>
  )
}
