import React from 'react';
import { useAuth } from './Auth';

const Profile = () => {
    const { email } = useAuth();
    
  console.log('Profile', email.name)

    return (
        <div>
            <h1>Profile:{email.name}</h1>
        </div>
    );
}

export default Profile;
//rsf