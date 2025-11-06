import React, { useState, useEffect } from 'react';
import UserList from '../components/user/UserList';
import UserForm from '../components/user/UserForm';
import * as userApi from '../services/userApi';
import * as roleApi from '../services/roleApi';
import { logError } from '../services/errorApi';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchItems = async () => {
    try {
      setLoading(true);
      const [usersData, rolesData] = await Promise.all([
        userApi.getUsers(),
        roleApi.getRoles(),
      ]);
      setUsers(usersData);
      setRoles(rolesData);
      setError('');
    } catch (err) {
      logError(err, '/user');
      setError('Failed to fetch data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSave = async (itemData) => {
    try {
      if (currentItem) {
        await userApi.updateUser(itemData.id, itemData);
      } else {
        await userApi.createUser(itemData);
      }
      fetchItems();
      setCurrentItem(null);
    } catch (err) {
      logError(err, '/user');
      setError('Failed to save user.');
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
  };

  const handleDelete = async (id) => {
    try {
      await userApi.deleteUser(id);
      fetchItems();
    } catch (err) {
      logError(err, '/user');
      setError('Failed to delete user.');
    }
  };

  const handleCancel = () => {
    setCurrentItem(null);
  };

  return (
    <div className="page-container">
      <h1>User Management</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="grid-container">
        <div className="form-card">
          <UserForm onSave={handleSave} currentItem={currentItem} onCancel={handleCancel} allRoles={roles} />
        </div>
        <div className="list-card">
          {loading ? <p>Loading...</p> : <UserList items={users} onEdit={handleEdit} onDelete={handleDelete} />}
        </div>
      </div>
    </div>
  );
};

export default UserPage;