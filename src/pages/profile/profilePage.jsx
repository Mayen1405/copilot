import React, { useState } from "react";
import { useProfile } from "../../shared/hooks/useProfile";
import { ProfileView } from "../../components/profile/profileView";
import { ProfileEditForm } from "../../components/profile/profileEditForm";
import "./ProfilePage.css";

export const ProfilePage = () => {
  const { profile, loading, error, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleEdit = () => setIsEditing(true);
  const handleSave = (updatedProfile) => {
    updateProfile(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      {isEditing ? (
        <ProfileEditForm profile={profile} onSubmit={handleSave} />
      ) : (
        <ProfileView profile={profile} onEdit={handleEdit} />
      )}
    </div>
  );
};