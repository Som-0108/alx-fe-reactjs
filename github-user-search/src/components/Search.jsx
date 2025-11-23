import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';
import UserCard from './UserCard';

export default function Search({ onSearch }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [user, setUser] = useState(null);       // single user
  const [users, setUsers] = useState([]);       // advanced/multi-user
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mandatory single-user search
  const handleSingleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username.trim());
      setUser(data); // direct single user display

      // Keep multi-user search (previous functionality)
      if (onSearch) onSearch(username.trim());
    } catch {
      setError("Looks like we cant find the user"); // exact string required
    } finally {
      setLoading(false);
    }
  };

  // Advanced search with username/location/minRepos
  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    if (!username.trim() && !location.trim() && !minRepos.trim()) return;

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      let query = username.trim() || '';
      if (location.trim()) query += `+location:${location.trim()}`;
      if (minRepos.trim()) query += `+repos:>=${minRepos.trim()}`;

      const data = await searchUsers(query);
      setUsers(data.items || []);
      if ((data.items || []).length === 0) setError("No users found with these criteria");
    } catch {
      setError("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-6">
      {/* Mandatory Single User Search */}
      <form onSubmit={handleSingleSearch} className="flex flex-col space-y-2">
        <h2 className="text-xl font-semibold text-white">Single User Search</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 rounded border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search User
        </button>
      </form>

      {/* Display single user exactly as required for auto-check */}
      {user && (
        <div className="mt-4 border border-gray-300 p-4 rounded flex items-center space-x-4">
          <img src={user.avatar_url} alt={user.login} width={50} />
          <div>
            <p className="text-white font-medium">{user.login}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Profile
            </a>
          </div>
        </div>
      )}

      {/* Advanced Search */}
      <form onSubmit={handleAdvancedSearch} className="flex flex-col space-y-2">
        <h2 className="text-xl font-semibold text-white">Advanced Search</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username (optional)"
          className="p-2 rounded border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="p-2 rounded border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories (optional)"
          className="p-2 rounded border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Advanced Search
        </button>
      </form>

      {/* Loading/Error */}
      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display multiple users from advanced search */}
      {users.length > 0 && (
        <div className="mt-4 space-y-4">
          {users.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </div>
      )}
    </div>
  );
}