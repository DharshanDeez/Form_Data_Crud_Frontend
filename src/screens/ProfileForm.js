import React, { useState } from 'react';
import axios from 'axios';


const ProfileForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        profileImage: null,
    });

    const handleChange = (e) => {
        if (e.target.name === 'profileImage') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                profileImage: e.target.files[0],
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { email, username, firstName, lastName, profileImage } = formData;

            const postData = new FormData();
            postData.append('email', email);
            postData.append('username', username);
            postData.append('firstName', firstName);
            postData.append('lastName', lastName);
            postData.append('profileImage', profileImage);

            await axios.post('http://localhost:8080/profiles', postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle success or redirect to profiles listing
        } catch (error) {
            console.error('Failed to add profile:', error);
        }
    };

    return (
        <div>
            <h2>Add Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="profileImage">Profile Image:</label>
                    <input type="file" id="profileImage" name="profileImage" accept="image/*" onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProfileForm;
