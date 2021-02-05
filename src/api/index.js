import axios from 'axios';
const API = axios.create({ baseURL: 'https://insta-sarhan.herokuapp.com' });
// const url = 'https://insta-sarhan.herokuapp.com/posts';

API.interceptors.request.use((req) => {
  let localProfile = localStorage.getItem('profile');
  if (localProfile) {
    let profile = JSON.parse(localProfile);
    req.headers.Authorization = `Bearer ${profile.token}`;
  }
  return req;
});

export const fetchPosts = () => API.get(`/posts`);

export const createPost = (newPost) => API.post(`/posts`, newPost);

export const editPost = (id, post) => API.patch(`/posts/${id}`, post);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (user) => API.post(`/users/signin`, user);

export const signUp = (user) => API.post(`/users/signup`, user);
