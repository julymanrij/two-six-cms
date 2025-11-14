import React from 'react';
import '../../styles/MasterDesign.css';
import { EditIcon, DeleteIcon, ViewIcon } from '../common/Icons.jsx';
import ActionButton from '../common/ActionButton.jsx';

const MasterDesignList = ({ designs, onEdit, onDelete, onViewProviders }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Referencia</th>
            <th>Costo de Fabricación</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Prenda</th>
            <th>Colección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {designs.map((design) => (
            <tr key={design.id}>
              <td>{design.reference}</td>
              <td>{design.manufactured_cost}</td>
              <td>{design.description}</td>
              <td>{design.quantity ? String(design.quantity) : '0'}</td>
              <td>{design.clothing?.name || design.id_clothing}</td>
              <td>{design.collection?.name || design.id_collection}</td>
              <td>
                <button onClick={() => onEdit(design)} className="action-button button-edit" title="Editar"><EditIcon /></button>
                <button onClick={() => onDelete(design.id)} className="action-button button-delete" title="Eliminar"><DeleteIcon /></button>
                <button onClick={() => onViewProviders(design)} className="action-button button-info" title="Ver Proveedores"><ViewIcon /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterDesignList;