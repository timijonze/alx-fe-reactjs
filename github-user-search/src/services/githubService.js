import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

/**
 * Search GitHub users by query with optional filters for minimum repositories.
 * @param {string} query - The search query (e.g., "developer").
 * @param {number} [minRepos] - Minimum number of repositories for filtering (optional).
 * @returns {Promise<Array>} - List of users matching the query and filters.
 */
export const searchGitHubUsers = async (query, minRepos = 0) => {
  try {
    // Construct the search query
    let searchQuery = query;
    if (minRepos > 0) {
      searchQuery += ` repos:>=${minRepos}`;
    }

    // Perform the API call
    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(searchQuery)}`);
    return response.data.items; // Return the list of users
  } catch (error) {
    console.error('Error searching GitHub users:', error);
    throw error;
  }
};
