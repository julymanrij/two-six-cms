const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: `Request failed with status ${response.status}` }));
    throw new Error(errorData.message || `Something went wrong`);
  }
  // Para respuestas sin cuerpo (ej. DELETE 204)
  return response.status === 204 ? null : response.json();
};

export const getMasterDesigns = async () => {
  const response = await fetch(`${API_BASE_URL}/master-design`);
  return handleResponse(response);
};

export const getMasterDesignById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/master-design/${id}`);
  return handleResponse(response);
};

export const createMasterDesign = async (designData) => {
  const dataToSend = {
    reference: designData.reference,
    description: designData.description,
    manufactured_cost: parseFloat(designData.manufactured_cost),
    quantity: parseInt(designData.quantity, 10),
    id_clothing: parseInt(designData.id_clothing, 10),
    id_collection: parseInt(designData.id_collection, 10),
  };
  const response = await fetch(`${API_BASE_URL}/master-design`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToSend),
  });
  return handleResponse(response);
};

export const updateMasterDesign = async (id, designData) => {
  const dataToSend = {
    reference: designData.reference,
    description: designData.description,
    manufactured_cost: parseFloat(designData.manufactured_cost),
    quantity: parseInt(designData.quantity, 10),
    id_clothing: parseInt(designData.id_clothing, 10),
    id_collection: parseInt(designData.id_collection, 10),
  };
  const response = await fetch(`${API_BASE_URL}/master-design/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToSend),
  });
  return handleResponse(response);
};

export const deleteMasterDesign = async (id) => {
  await fetch(`${API_BASE_URL}/master-design/${id}`, { method: 'DELETE' });
};