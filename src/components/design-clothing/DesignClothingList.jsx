import React from 'react';
import { EditIcon, DeleteIcon } from '../common/Icons.jsx';
import ActionButton from '../common/ActionButton.jsx';

const DesignClothingList = ({ items, onEdit, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>
            <strong>Ref: {item.design?.reference}</strong>
            <br />
            <small>
              Color: {item.color?.name} | Size: {item.size?.name}
            </small>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.8em' }}>
              Produced: {item.quantity_produced} | Available: {item.quantity_available} | Sold: {item.quantity_sold}
            </p>
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

export default DesignClothingList;