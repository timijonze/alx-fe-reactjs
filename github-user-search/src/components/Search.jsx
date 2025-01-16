import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [usersData, setUsersData] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(false);
        setUsersData([]);

        try {
            const data = await fetchUserData({ username, location, minRepos });
            setUsersData(data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    placeholder="Enter GitHub username" 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input 
                    type="text" 
                    placeholder="Location" 
                    value={location} 
                    onChange={(event) => setLocation(event.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input 
                    type="number" 
                    placeholder="Minimum Repositories" 
                    value={minRepos} 
                    onChange={(event) => setMinRepos(event.target.value)} 
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Search</button>
            </form>

           
            {loading && <p>Loading...</p>}
            {error && <p>Looks like we cant find the user.</p>}
            {usersData.length > 0 && (
                <div className="mt-4 space-y-4">
                    {usersData.map(user => (
                        <div key={user.id} className="border p-4 rounded">
                            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full mx-auto" />
                            <p className="text-center mt-2">Username: {user.login}</p>
                            <p className="text-center"><a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View GitHub Profile</a></p>
                            <p className="text-center">Location: {user.location}</p>
                            <p className="text-center">Repositories: {user.public_repos}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
