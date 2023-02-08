import React, { useEffect, useState } from 'react'
import '../CSS/GroupsTab.css'
import '../CSS/UsersTab.css';
import Group from './Group';

export default function GroupsTab(props) {

    const [subdomains, setSubdomains] = useState([]);

    const getSubdomains = (users) => {
      const subdomains = [];
      users.forEach(user => {
        let webArr = user.website.split('.');
        let subd = webArr[1];
        console.log(subd)
        if(!subdomains.includes(subd)) {
          subdomains.push(subd);
          setSubdomains(subdomains);
        }
        console.log(subdomains)
      })
    }

    useEffect(() => getSubdomains(props.users), []);

  return (
    <div className='groups users'>
        {subdomains.map((subdomain, idx) => <Group key={idx} users={props.users} subdomain={`.${subdomain}`} />)}
    </div>
  )
}
