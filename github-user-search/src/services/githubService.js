import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

/**
 * Fetch GitHub user data.
 * @param {string} username - The GitHub username to fetch data for.
 * @returns {Promise<Object>} - The user's profile data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data; // Return the user data
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

/**
 * Fetch GitHub user repositories.
 * @param {string} username - The GitHub username to fetch repositories for.
 * @returns {Promise<Array>} - A list of repositories for the user.
 */
export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data; // Return the list of repositories
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    throw error;
  }
};
