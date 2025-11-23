// src/components/UserCard.jsx
import React from 'react';

export default function UserCard({ user }) {
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <img src={user.avatar_url} alt={user.login} width={50} height={50} />
      <div>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          {user.login}
        </a>
      </div>
    </div>
  );
}