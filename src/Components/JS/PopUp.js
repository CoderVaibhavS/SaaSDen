import React, { useEffect, useState } from 'react'
import '../CSS/Popup.css'

export default function PopUp(props) {

    const [image, setImage] = useState(props.image);
    
    const handleClick = async (evt) => {
        evt.stopPropagation();
        // if(image === '')
        // try {
        //     let imageData = await fetch(`https://jsonplaceholder.typicode.com/photos/${props.user.id}`, { method: 'GET' });
        //     let image = await imageData.json();
        //     setImage(image.url);
        //   }
        //   catch (err) {
        //     alert("Error in fetching data. Please check your network connection");
        //   }
        //   let images = props.images;
        //   props.updateImages(images);
    }

    useEffect(() => {}, [image])

    return (
        <div className='popup' onClick={handleClick}>
            <div className="popup-wrapper">
            <img src={image} alt="" />
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
