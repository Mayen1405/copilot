import React from 'react';
import PropTypes from 'prop-types';

export const ProfileView = ({ profile, onEdit }) => {
    return (
        <div>
            <h1>Perfil</h1>
            <p>Nombre: {profile.name}</p>
            <p>Apellido: {profile.surname}</p>
            <p>Correo: {profile.email}</p>
            <button onClick={onEdit}>Editar Perfil</button>
        </div>
    );
};

ProfileView.propTypes = {
    profile: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
};