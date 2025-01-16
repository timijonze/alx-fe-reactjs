import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

/**
 * Search GitHub users by query with optional filters for minimum repositories and location.
 * @param {string} query - The search query (e.g., "developer").
 * @param {number} [minRepos] - Minimum number of repositories for filtering (optional).
 * @param {string} [location] - Location to filter users by (optional).
 * @returns {Promise<Array>} - List of users matching the query and filters.
 */
export const searchGitHubUsers = async (query, minRepos = 0, location = '') => {
  try {
    // Construct the search query
    let searchQuery = query;

    // Add filter for minimum repositories if provided
    if (minRepos > 0) {
      searchQuery += ` repos:>=${minRepos}`;
    }

    // Add filter for location if provided
    if (location) {
      searchQuery += ` location:${location}`;
    }

    // Construct the full URL with the query and filters
    const url = `${BASE_URL}/search/users?q=${encodeURIComponent(searchQuery)}`;

    // Perform the API call
    const response = await axios.get(url);

    // Return the list of users that match the query and filters
    return response.data.items;

  } catch (error) {
    console.error('Error searching GitHub users:', error);
    throw error;
  }
};
