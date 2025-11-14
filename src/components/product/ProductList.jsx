import React from 'react';
import { EditIcon, DeleteIcon } from '../common/Icons.jsx';
import ActionButton from '../common/ActionButton.jsx';

const ProductList = ({ items, onEdit, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>
            <strong>{item.name}</strong> ({item.active ? 'Active' : 'Inactive'})
            <br />
            <small>
              SKU: {item.sku} | Ref: {item.designClothing?.design?.clothing?.name} | Price: ${item.price} | Color: {item.designClothing?.color?.name} | Size: {item.designClothing?.size?.name}
            </small>
          </span>
          <div>
            <ActionButton onClick={() => onEdit(item)} className="button-edit" title="Editar">
              <EditIcon />
            </ActionButton>
            <ActionButton onClick={() => onDelete(item.id)} className="button-delete" title="Eliminar">
              <DeleteIcon />
            </ActionButton>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;