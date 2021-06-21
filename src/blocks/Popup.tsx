import React from 'react'
import './style/Popup.css'

export default function Popup() {
    return (
        <div id="popup">
            <div className="popup_content">
                <p id="popup_title">Столкновение машин</p>
                <p id="popup_date">Дата, время</p>
                <p id="popup_plase">Место</p>
                <p id="popup_affected">Количество пострадавших</p>
            </div>
            <div className="popover_arrow"> 
            </div>
        </div>
    )
}