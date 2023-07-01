import React from 'react'
import "./MoreInfoPage.css"
import MoreInfoImage from '../assets/images/box-vegies.jpg'

const MoreInfoPage = () => {
    return (
        <div className='more-info-page'>
            <div className='more-info left'>
                <img src={MoreInfoImage} alt="more-info" />
            </div>
            <div className='more-info right'>
                <div className='more-info-heading'>What's inside each box?</div>
                <div className='more-info-desc'>
                    <li>Illustrated step-by-step recipes</li>
                    <li> Ready to cook ingredients</li>
                    <li> QR codes for real-time videos </li>
                    <li> Guaranteed delicious meals!</li>
                </div>
                <button className='more-info-button'>Browse our kits</button>
            </div>
        </div>
    );
}

export default MoreInfoPage