import React, { useState, useEffect } from 'react';

const RoleForm = ({ onSave, currentItem, onCancel }) => {
  const getInitialState = () => ({ name: '' });
  const [formData, setFormData] = useState(getInitialState());

  useEffect(() => {
    if (currentItem) {
      setFormData({ name: currentItem.name });
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
    onSave({ ...formData, code_role: currentItem?.code_role });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{currentItem ? 'Edit' : 'Add'} Role</h3>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <button type="submit">Save</button>
      {currentItem && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default RoleForm;