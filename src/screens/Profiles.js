import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../screens/Profiles.css';

const Profiles = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await axios.get('http://localhost:8080/profiles');
                console.log(response);
                setProfiles(response.data);
            } catch (error) {
                console.error('Failed to fetch profiles:', error);
            }
        };

        fetchProfiles();
    }, []);

    return (
        <div>
            <h1>Profiles</h1>
            <div className="add-profile-button">
                <Link to="/addprofile">
                    <button>Add Profile</button>
                </Link>
            </div>
            <div className="card-container">
                {profiles.map((profile) => (
                    <div key={profile._id} className="card">
                        <img src={profile.profileImage} alt={profile.username} />
                        <div className="card-body">
                            <h3>{profile.username}</h3>
                            <p>
                                {profile.firstName} {profile.lastName}
                            </p>
                            <p>{profile.email}</p>
                            <p>Created At: {new Date(profile.createdAt).toLocaleString()}</p>
                            <p>Updated At: {new Date(profile.updatedAt).toLocaleString()}</p>
                            <Link to={`/profiles/${profile._id}`}>View Profile</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profiles;
