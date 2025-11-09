const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(errorData.message || 'Something went wrong');
  }
  // Para respuestas DELETE que pueden no tener cuerpo
  if (response.status === 204) {
    return;
  }
  return response.json();
};

export const getProviders = async () => {
  const response = await fetch(`${API_BASE_URL}/provider`);
  return handleResponse(response);
};

export const createProvider = async (providerData) => {
  const response = await fetch(`${API_BASE_URL}/provider`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(providerData),
  });
  return handleResponse(response);
};

export const updateProvider = async (id, providerData) => {
  const response = await fetch(`${API_BASE_URL}/provider/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(providerData),
  });
  return handleResponse(response);
};

export const deleteProvider = async (id) => {
  const response = await fetch(`${API_BASE_URL}/provider/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};