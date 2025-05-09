import axios from 'axios';

axios.defaults.baseURL = 'https://680a26a51f1a52874cdf5dc7.mockapi.io';

export const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const postContact = async newContact => {
  const response = await axios.post('/contacts', newContact);
  return response.data;
};
export const deleteContactById = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};