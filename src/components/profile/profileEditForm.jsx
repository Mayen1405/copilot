import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ProfileEditForm = ({ profile, onSubmit }) => {
    const [formState, setFormState] = useState(profile);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Apellido:
                <input
                    type="text"
                    name="surname"
                    value={formState.surname}
                    onChange={handleChange}
                />
            </label>
            <label>
                Correo:
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Guardar</button>
        </form>
    );
};

ProfileEditForm.propTypes = {
    profile: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};