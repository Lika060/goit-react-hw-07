import axios from 'axios';

const API_URL = 'https://your-mockapi-url.mockapi.io/contacts'; // заміни на свій

export const getContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const postContact = async newContact => {
  const response = await axios.post(API_URL, newContact);
  return response.data;
};

export const deleteContactById = async id => {
  await axios.delete(`${API_URL}/${id}`);
};
