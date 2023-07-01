import React from 'react';
import "./Working.css";
import { workingData } from '../assets/data/Data'; // Import the workingData array

const Working = () => {
  return (
    <div className='working'>
      {workingData.map((item) => {
        return (
          <div className='working-carousel' key = {item.id}>
            <div className='bullet'>
              {item.id}
            </div>
            <div className='desc'>
              {item.description}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Working;
