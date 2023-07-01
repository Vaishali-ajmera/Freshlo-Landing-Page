import React from 'react';
import "./ItemsPage.css";
import Items from "../components/Items";

const ItemsPage = () => {
  return (
    <div className='items-page'>
      <div className="items-header">
        <h2>Freshlo</h2>
        <div>
          <p>Take home the Kitchen Comforts experience.</p>
          <p>Try our Meal Kits and unleash your inner chef!</p>
        </div>

      </div>

      <Items />
    </div>
  );
}

export default ItemsPage;
