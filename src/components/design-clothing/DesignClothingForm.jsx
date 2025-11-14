import React, { useState, useEffect } from 'react';

const DesignClothingForm = ({ onSave, currentItem, onCancel, designs, colors, sizes }) => {
  const getInitialState = () => ({
    id_design: '',
    id_color: '',
    id_size: '',
    quantity_produced: 0,
    quantity_available: 0,
    quantity_sold: 0,
    quantity_on_consignment: 0,
    quantity_under_warranty: 0,
  });

  const [formData, setFormData] = useState(getInitialState());

  useEffect(() => {
    if (currentItem) {
      setFormData({
        id_design: currentItem.id_design || '',
        id_color: currentItem.id_color || '',
        id_size: currentItem.id_size || '',
        quantity_produced: currentItem.quantity_produced || 0,
        quantity_available: currentItem.quantity_available || 0,
        quantity_sold: currentItem.quantity_sold || 0,
        quantity_on_consignment: currentItem.quantity_on_consignment || 0,
        quantity_under_warranty: currentItem.quantity_under_warranty || 0,
      });
    } else {
      setFormData(getInitialState());
    }
  }, [currentItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSave = {
      ...formData,
      id_design: parseInt(formData.id_design, 10),
      id_color: parseInt(formData.id_color, 10),
      id_size: parseInt(formData.id_size, 10),
      quantity_produced: parseInt(formData.quantity_produced, 10),
      quantity_available: parseInt(formData.quantity_available, 10),
      quantity_sold: parseInt(formData.quantity_sold, 10),
      quantity_on_consignment: parseInt(formData.quantity_on_consignment, 10),
      quantity_under_warranty: parseInt(formData.quantity_under_warranty, 10),
    };
    onSave(dataToSave);
    setFormData(getInitialState());
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{currentItem ? 'Edit Design Clothing' : 'Add Design Clothing'}</h3>
      <div className="form-group">
        <label>Design</label>
        <select name="id_design" value={formData.id_design} onChange={handleChange} required>
          <option value="">Select Design</option>
          {designs.map(d => <option key={d.id} value={d.id}>{d.reference}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Color</label>
        <select name="id_color" value={formData.id_color} onChange={handleChange} required>
          <option value="">Select Color</option>
          {colors.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Size</label>
        <select name="id_size" value={formData.id_size} onChange={handleChange} required>
          <option value="">Select Size</option>
          {sizes.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Quantity Produced</label>
        <input type="number" name="quantity_produced" value={formData.quantity_produced} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Quantity Available</label>
        <input type="number" name="quantity_available" value={formData.quantity_available} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Quantity Sold</label>
        <input type="number" name="quantity_sold" value={formData.quantity_sold} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Quantity on Consignment</label>
        <input type="number" name="quantity_on_consignment" value={formData.quantity_on_consignment} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Quantity under Warranty</label>
        <input type="number" name="quantity_under_warranty" value={formData.quantity_under_warranty} onChange={handleChange} required />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
        <button type="submit">{currentItem ? 'Update' : 'Create'}</button>
        {currentItem && <button type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
};

export default DesignClothingForm;