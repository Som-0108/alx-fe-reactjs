// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubApi';
import UserCard from './UserCard';

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('');
  const [user, setUser] = useState(null);      // stores single user
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!q.trim()) return;

    // Call the parent onSearch function if provided (keeps old behavior)
    if (onSearch) {
      onSearch(q.trim());
    }

    // Mandatory basic search feature
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(q.trim());
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search form */}
      <form onSubmit={handleSubmit}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search GitHub users..."
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering for mandatory basic search */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}