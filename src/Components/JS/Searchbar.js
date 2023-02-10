import React, { useEffect, useState } from 'react'
import '../CSS/Searchbar.css'

export default function Searchbar(props) {

    const [keyword, setKeyword] = useState('');
    useEffect(() => props.search(keyword), [keyword])

  return (
    <div className='searchbar'>
        <input type="text" value={keyword} placeholder='Search for users...' id="search" onChange={(e => {setKeyword(e.target.value)})} />
        <div className="button" onClick={() => props.search(keyword)}>Search</div>
    </div>
  )
}
