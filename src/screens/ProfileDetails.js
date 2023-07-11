import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../screens/ProfileDetails.css';

const ProfileDetail = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/profiles/${id}`);
                setProfile(response.data);
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };

        fetchProfile();
    }, [id]);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-detail">
            <h2>Profile Detail</h2>
            <div className="profile-card">
                <div className="profile-image">
                    <img src={profile.profileImage} alt="Profile" />
                </div>
                <div className="profile-info">
                    <p><strong>Profile ID:</strong> {profile._id}</p>
                    <p><strong>Username:</strong> {profile.username}</p>
                    <p><strong>First Name:</strong> {profile.firstName}</p>
                    <p><strong>Last Name:</strong> {profile.lastName}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Created At:</strong> {new Date(profile.createdAt).toLocaleString()}</p>
                    <p><strong>Updated At:</strong> {new Date(profile.updatedAt).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetail;
