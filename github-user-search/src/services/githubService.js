import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

/**
 * Search GitHub users by query with optional filters for location.
 * @param {string} query - The search query (e.g., "developer").
 * @param {string} [location] - Filter users by location (optional).
 * @returns {Promise<Array>} - List of users matching the query and filters.
 */
export const searchGitHubUsers = async (query, location = '') => {
  try {
    // Construct the search query
    let searchQuery = query;
    if (location) {
      searchQuery += ` location:${location}`;
    }

    // Perform the API call
    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(searchQuery)}`);
    return response.data.items; // Return the list of users
  } catch (error) {
    console.error('Error searching GitHub users:', error);
    throw error;
  }
};
