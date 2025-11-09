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

export const getYearProductions = async () => {
  const response = await fetch(`${API_BASE_URL}/year-production`);
  return handleResponse(response);
};

export const createYearProduction = async (data) => {
  const response = await fetch(`${API_BASE_URL}/year-production`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const updateYearProduction = async (id, data) => {
  const response = await fetch(`${API_BASE_URL}/year-production/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
};

export const deleteYearProduction = async (id) => {
  const response = await fetch(`${API_BASE_URL}/year-production/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};