import { useState, useEffect } from 'react';
import { fetchUserProfile, updateUserProfile } from '../../services/api';
// import { useUserDetails } from '../../shared/hooks/useUserDetails';  

export const useProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const userProfile = await fetchUserProfile();
                setProfile(userProfile);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadProfile();
    }, []);

    const updateProfile = async (updatedData) => {
        try {
            const updatedProfile = await updateUserProfile(updatedData);
            setProfile(updatedProfile);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    return {
        profile,
        loading,
        error,
        updateProfile,
    };
};