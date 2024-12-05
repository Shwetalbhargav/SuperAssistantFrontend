import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

// Categorization Form API
export const fetchCategorizationForms = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categorization/fetch-forms`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categorization forms:', error);
    throw error;
  }
};

export const submitCategorizationForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/categorization/submit-form`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting categorization form:', error);
    throw error;
  }
};

export const fetchCategorizationCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categorization/fetch-categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categorization categories:', error);
    throw error;
  }
};

// Cloze Form API
export const fetchClozeForms = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cloze/forms`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cloze forms:', error);
    throw error;
  }
};

export const addClozeForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cloze/add-form`, formData);
    return response.data;
  } catch (error) {
    console.error('Error adding cloze form:', error);
    throw error;
  }
};

// Comprehension API
export const fetchComprehensions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/comprehension`);
    return response.data;
  } catch (error) {
    console.error('Error fetching comprehensions:', error);
    throw error;
  }
};

export const addComprehension = async (comprehensionData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/comprehension/add`, comprehensionData);
    return response.data;
  } catch (error) {
    console.error('Error adding comprehension:', error);
    throw error;
  }
};

export const fetchComprehensionById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/comprehension/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comprehension with ID ${id}:`, error);
    throw error;
  }
};
