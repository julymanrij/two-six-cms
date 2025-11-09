import React from 'react';
import '../../styles/MasterDesign.css';

const MasterDesignList = ({ designs, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Referencia</th>
            <th>Costo de Fabricación</th>
            <th>Cantidad</th>
            <th>Proveedor</th>
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
              <td>{design.quantity ? String(design.quantity) : '0'}</td>
              <td>{design.provider?.company_name || design.id_provider}</td>
              <td>{design.clothing?.name || design.id_clothing}</td>
              <td>{design.collection?.name || design.id_collection}</td>
              <td>
                <button onClick={() => onEdit(design)} className="button-edit">Editar</button>
                <button onClick={() => onDelete(design.id)} className="button-delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterDesignList;