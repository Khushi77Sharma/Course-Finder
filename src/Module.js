import React, { useState } from 'react';
import Item from './Item';
import './Module.css';

function Module({ title }) {
  const [items, setItems] = useState([
    { type: 'PDF', name: 'Introduction to the course' },
    { type: 'Link', name: 'Understanding trigonometry' },
  ]);

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className="module">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item, index) => (
          <Item key={index} item={item} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
}

export default Module;
