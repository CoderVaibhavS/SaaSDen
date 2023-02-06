import React from 'react'
import '../CSS/Popup.css'
import anshal from '../../anshal.png'

export default function PopUp(props) {
    return (
        <div className='popup' onClick={(evt) => {evt.stopPropagation()}}>
            <div className="popup-wrapper">
            <img src={anshal} alt="" />
            <div className='details'>
                <h2 className="name">{props.user.name}</h2>
                <span className="username">{props.user.username}</span>
                <a href='#' className="website">{props.user.website}</a>
            </div>
            </div>
            <div className="close" onClick={() => props.handleClick()}>
                <div className="cross" id='cross-1'></div>
                <div className="cross" id='cross-2'></div>
            </div>
        </div>
    )
}
