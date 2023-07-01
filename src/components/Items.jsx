import React from 'react'
import  "./Items.css"
import { itemsData } from '../assets/data/Data';

const Items = () => {
    return (
        <div className='items'>
            {itemsData.map((item) => {
                return (
                    <div
                        className='item-carousel'
                        key={item.id}
                    >
                        <div className='item-image'>
                            {/* <img src={`../assets/image/${item.image}`} alt="" /> */}
                        </div>

                        <div className="item-info">

                            <div className='item-name'>
                                {item.name}
                            </div>
                            <button className='item-btnDesc'>
                                {item.btnDesc}
                            </button>

                        </div>

                    </div>
                )
            })}
        </div>
    );
}

export default Items