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

// AnimalAdd
export const addAnimal = async (data, images) => {
  const resp = await api.post("/animals", data);
  images.forEach(async (image) =>
    await addAnimalImage(resp.data.id, image)
  );
  return resp.data
}

// AnimalEdit
export const editAnimal = async (data, ) => {
  const resp = await api.put(`/animals/${data.id}`, data);
  return resp.data
}

// Add an animal image
export const addAnimalImage = async (animalId, image) => {
  const resp = await api.post("/animal_images", { image_url: image, animal_id: animalId })
  return resp.data
}

// Delete an animal
export const deleteAnimal = async (id) => {
  const resp = await api.delete(`/animals/${id}`);
  return resp.data
}

// Delete image 
export const deleteImage = async (id) => {
  const resp = await api.delete(`/animal_images/${id}`);
  return resp.data
}

// Get an animal by id
export const getAnimal = async (id) => {
  const resp = await api.get(`/animals/${id}`);
  return resp.data
}

// Get an owners profile
export const getOwnerProfile = async (user) => {
  const resp = await api.get(`/users/${user}`);
  return resp.data
}

// Save an animal 
export const saveAnimal = async (id) => {
  const resp = await api.post(`users/savedAnimals/${id}`);
  return resp.data
}

// unSave an animal
export const unSaveAnimal = async (id) => {
  const resp = await api.delete(`users/savedAnimals/${id}`);
  return resp.data
}