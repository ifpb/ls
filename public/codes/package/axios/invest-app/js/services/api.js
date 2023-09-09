import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_SUPABASE_KEY;
const API_URL = import.meta.env.VITE_APP_SUPABASE_URL + '/rest/v1';

export default axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
    },
    post: {
      Prefer: 'return=representation',
    },
    patch: {
      Prefer: 'return=representation',
    },
  },
});
