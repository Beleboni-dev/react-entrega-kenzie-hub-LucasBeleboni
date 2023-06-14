import axios from 'axios';

const baseURL = 'https://kenziehub.herokuapp.com';

export const endpoints = {
  sessions: '/sessions',
  users: '/users',
  techs: '/users/techs',
  works: '/users/works',
  profile: '/profile',
};

export const api = axios.create({
  baseURL,
});