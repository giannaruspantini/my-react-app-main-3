import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.log('No token found');
        return;
      }
  
      const response = await fetch('http://localhost:5001/api/profile', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
  
      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
      } else {
        console.error('Error fetching profile');
      }
    };
  
    fetchProfile();
  }, []);
  
  return (
    <div>
      {profileData ? (
        <div>
          <h1>Welcome, {profileData.name}</h1>
          {/* Display other profile details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
