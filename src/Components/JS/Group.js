import React from 'react'
import '../CSS/Group.css'
import User from './User'

export default function Group(props) {
  return (
    <div className='subdomain users'>
        <div className="users-wrapper">
        <div className="list-head-wrapper"><div className="bullet" style={{ opacity: 0 }}></div><div className="list-head">Users with '{props.subdomain}' subdomain</div></div>
        <ul className='users-list'>
        {props.users.map((user, idx) => user.website.includes(props.subdomain) && <User user={user} key={idx} idx={idx} />)}
        </ul>
        </div>
    </div>
  )
}
