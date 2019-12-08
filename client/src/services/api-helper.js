import axios from 'axios';

const baseUrl = 'http://localhost:3000'
// const baseUrl = 'heroku app'

const api = axios.create({
  baseURL: baseUrl
})


// ************** Auth *****************

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}
// Get my animals 
export const getMyAnimals = async (user) => {
  const resp = await api.get(`/users/${user}/animals`);
  return resp.data
}

// Get all animals
export const getAllAnimals = async () => {
  const resp = await api.get(`/animals`);
  return resp.data
}

// Get AnimalsSaved
export const getSavedAnimals = async (user) => {
  const resp = await api.get(`/users/${user}/savedAnimals`);
  return resp.data
}