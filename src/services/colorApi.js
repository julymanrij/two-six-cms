const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_ENDPOINT = `${API_BASE_URL}/color`;

export const getColors = async () => {
  const response = await fetch(API_ENDPOINT);
  if (!response.ok) {
    throw new Error('Failed to fetch colors');
  }
  return response.json();
};