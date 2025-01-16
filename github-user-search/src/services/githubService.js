import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

/**
 * Fetch a GitHub user's profile information.
 * @param {string} username - GitHub username to fetch.
 * @returns {Promise<Object>} - Promise resolving to user data.
 */
export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data; // Return user data
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};

/**
 * Fetch a GitHub user's repositories.
 * @param {string} username - GitHub username to fetch repos for.
 * @returns {Promise<Array>} - Promise resolving to a list of repositories.
 */
export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos`);
    return response.data; // Return repositories data
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    throw error;
  }
};
