// src/services/githubApi.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional
const headers = token ? { Authorization: `token ${token}` } : {};

// Existing function (search multiple users)
export async function searchUsers(query) {
  const res = await axios.get(`${BASE_URL}/search/users`, {
    params: { q: query },
    headers,
  });
  return res.data; // { total_count, items: [user1, user2, ...] }
}

// New function for single user (for the basic search assignment)
export async function fetchUserData(username) {
  try {
    const res = await axios.get(`${BASE_URL}/users/${username}`, { headers });
    return res.data; // returns object with user info
  } catch (error) {
    throw new Error("User not found");
  }
}