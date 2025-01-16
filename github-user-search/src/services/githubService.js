import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

/**
 * Search GitHub users by query.
 * @param {string} query - The search query (e.g., "john", "developer location:New York").
 * @returns {Promise<Array>} - List of users matching the query.
 */
export const searchGitHubUsers = async (query) => {
  try {
    // Perform the API call
    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items; // Return the list of users
  } catch (error) {
    console.error('Error searching GitHub users:', error);
    throw error;
  }
};
