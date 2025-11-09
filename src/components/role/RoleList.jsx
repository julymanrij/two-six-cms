import React from 'react';

const RoleList = ({ items, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Roles</h2>
      {items.length > 0 ? (<ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name} (ID: {item.id})</span>
            <div>
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>) : (<p>No roles found.</p>)}
    </div>
  );
};

export default RoleList;