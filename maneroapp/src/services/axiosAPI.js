import axios from 'axios';

// Skapar en instans av axios med förkonfigurerade inställningar
const axiosAPI = axios.create({
  // Bas-URL:en för backend manero
  baseURL: 'https://localhost:7277/',
  // Definierar timeouts
  timeout: 3000,
  // Definierar headers
  headers: {'Content-Type': 'application/json'}
});


export default axiosAPI;


