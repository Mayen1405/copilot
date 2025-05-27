export const validateProfile = (profile) => {
    const errors = [];

    if (!profile.name || profile.name.length > 25) {
        errors.push('El nombre es obligatorio y no debe exceder 25 caracteres.');
    }

    if (!profile.surname || profile.surname.length > 25) {
        errors.push('El apellido es obligatorio y no debe exceder 25 caracteres.');
    }

    if (!profile.email || !/\S+@\S+\.\S+/.test(profile.email)) {
        errors.push('El correo electrónico no es válido.');
    }

    return errors;
};