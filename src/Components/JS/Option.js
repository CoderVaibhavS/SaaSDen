import React, { useEffect, useState } from 'react'
import '../CSS/Option.css'

export default function Option(props) {

    const [active, setActive] = useState(props.active);
    useEffect(() => {
        setActive(!active);
        if(active)  {
            document.querySelector(`#${props.option}`).classList.add('active');
        }
        else document.querySelector(`#${props.option}`).classList.remove('active')
    }, [props.active])

  return (
    <div className='option' id={props.option}>
        <div className='circle-wrapper'><div className='circle'></div></div>
        <label>{props.option}</label>
    </div>
  )
}
