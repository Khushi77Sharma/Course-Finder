import React from 'react';
import './Item.css';

function Item({ item, onDelete }) {
  return (
    <div className="item">
      <span className="item-type">{item.type}</span>
      <span className="item-name">{item.name}</span>
      <button className="edit-button">Edit</button>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Item;
