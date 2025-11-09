import React from 'react';

const CategoryList = ({ categories, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Categories</h2>
      {categories.length > 0 ? (<ul>
        {categories.map(category => (
          <li key={category.id}>
            <span>{category.name} (ID: {category.id})</span>
            <div>
              <button onClick={() => onEdit(category)}>Edit</button>
              <button onClick={() => onDelete(category.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>) : (<p>No categories found.</p>)}
    </div>
  );
};

export default CategoryList;