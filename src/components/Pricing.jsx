import React from 'react';
import "./Pricing.css";
import { pricingData } from '../assets/data/Data';

const Pricing = () => {
    return (
        <div className='pricing'>
            {pricingData.map((item) => {
                return (
                    <div
                        className='pricing-carousel'
                        key={item.id}
                        // style={{ backgroundImage: `url(${item.image})` ,   }}
                    >
                        <div className='pricing-price'>
                            {item.price}
                        </div>

                        <div className="pricing-info">

                            <div className='pricing-name'>
                                {item.name}
                            </div>
                            <div className='pricing-desc'>
                                {item.description}
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Pricing;
