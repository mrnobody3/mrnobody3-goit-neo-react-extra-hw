import axios from 'axios';

const CONTACTS_BASE = import.meta.env.VITE_APP_API_URL || '';
const AUTH_BASE =
  import.meta.env.VITE_AUTH_API_URL || 'https://connections-api.goit.global';

export const contactsAPI = axios.create({ baseURL: CONTACTS_BASE });
export const authAPI = axios.create({ baseURL: AUTH_BASE });

export const setAuthHeader = token => {
  authAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete authAPI.defaults.headers.common.Authorization;
};

export default { contactsAPI, authAPI };
