import axiosAPI from '../services/axiosAPI';  

export const fetchData = async (endpoint) => {
  try {
    const response = await axiosAPI.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const createData = async (endpoint, data) => {
  try {
    const response = await axiosAPI.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
};

export const updateData = async (endpoint, data) => {
  try {
    const response = await axiosAPI.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await axiosAPI.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

export const sendResetLink = async (endpoint, data) => {
  try {
    const response = await axiosAPI.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error sending reset link:', error);
    throw error;
  }
};
