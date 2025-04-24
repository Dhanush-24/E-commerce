import React from 'react';

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) return <p>No user data found.</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Welcome, {user.name}</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
        <li className="list-group-item"><strong>Phone:</strong> {user.phone}</li>
        <li className="list-group-item"><strong>Address:</strong> {user.address}</li>
      </ul>
    </div>
  );
};

export default ProfilePage;
