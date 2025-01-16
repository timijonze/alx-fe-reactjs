import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

/**
 * Search for GitHub users with specific criteria.
 * @param {string} query - The search query (e.g., username, location, etc.).
 * @param {string} location - Filter users by location (optional).
 * @param {number} minRepos - Filter users with at least this number of repositories (optional).
 * @returns {Promise<Array>} - List of users matching the criteria.
 */
export const searchGitHubUsers = async (query, location = '', minRepos = 0) => {
  try {
    // Construct the search query
    let searchQuery = query;
    if (location) {
      searchQuery += ` location:${location}`;
    }
    if (minRepos > 0) {
      searchQuery += ` repos:>=${minRepos}`;
    }

    // Make the API call
    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(searchQuery)}`);
    return response.data.items; // Return the list of users
  } catch (error) {
    console.error('Error searching GitHub users:', error);
    throw error;
  }
};
