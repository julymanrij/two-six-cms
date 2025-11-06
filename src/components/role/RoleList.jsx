import React from 'react';

const RoleList = ({ items, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Roles</h2>
      {items.length > 0 ? (<ul>
        {items.map(item => (
          <li key={item.code_role}>
            <span>{item.name}</span>
            <div>
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onDelete(item.code_role)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>) : (<p>No roles found.</p>)}
    </div>
  );
};

export default RoleList;