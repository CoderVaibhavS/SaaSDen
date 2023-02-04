import React, { useEffect, useState } from 'react'
import '../CSS/Sidebar.css'
import Option from './Option'

export default function Sidebar() {

    const [active, setActive] = useState(1);
    useEffect(() => {}, [active])

  return (
    <div className='sidebar'>
        <div className="dashboard">
        <svg className='dash-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"/></svg>
        <span>Dashboard</span>
        </div>
        <div className='options'>
            <div onClick={() => setActive(1)}><Option option='users' active={active === 1 ? true : false} /></div>
            <div onClick={() => setActive(2)}><Option option='groups' active={active === 2 ? true : false} /></div>
            <div onClick={() => setActive(3)}><Option option='lorem' active={active === 3 ? true : false} /></div>
        </div>
    </div>
  )
}
