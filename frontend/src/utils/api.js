import axios from 'axios';  

const API_URL = 'http://192.168.30.7:4000';

// Alarms

export const getAlarms = (email, password) => axios({   //<-- Get
    url: `${API_URL}/api/alarm`,
    method: 'get',
    // auth: {
    //     password,
    //     username: email
    // }
});

export const sendAlarm = (area, location, type) => axios({  //<-- Post
    url: `${API_URL}/api/trigger`,
    method: 'post',
    data: {
        location: location,
        area: area,
        type: type,
    }
});

// Areas

export const getAreas = () => axios({   //<-- Get
    url: `${API_URL}/api/areas`,
    method: 'get'
});

export const setArea = areaName => axios({  //<-- Post
    url: `${API_URL}/api/areas`,
    method: 'post',
    data: {
        nombre_area: areaName
    }
});

export const deleteArea = id => axios({ //<-- Delete
    url: `${API_URL}/api/areas/${id}`,
    method: 'delete'
});

// Users

export const getUsers = () => axios({   //<-- Get
    url: `${API_URL}/api/users`,
    method: 'get'
});

export const setUser = user => axios({  //<-- Post
    url: `${API_URL}/api/users`,
    method: 'post',
    data: {
        nombre_usuario: user.name,
        apellido_usuario: user.lastName,
        contraseña: user.password,
        email_usuario: user.email,
        telefono_usuario: user.telphone,
        tipo_usuario: user.type
    }
});

export const deleteUser = id => axios({ //<-- Delete
    url: `${API_URL}/api/users/${id}`,
    method: 'delete'
});

//  Pacientes

export const setFicha = patient => axios({  //<-- Post
    url: `${API_URL}/api/patients`,
    method: 'post',
    data: {
        nombre_pasiente: patient.name,
        apellido_pasiente: patient.lastName,
        telefono_pasiente: patient.telphone,
        dni_pasiente: patient.DNI,
        ubicacion_pasiente: patient.location,
        alergia: patient.alergies,
        estado: patient.state,
    }
});

export const getFichas = () => axios({   //<-- Get
    url: `${API_URL}/api/patients`,
    method: 'get'
});

export const deleteFicha = id => axios({   //<-- Get
    url: `${API_URL}/api/patients/${id}`,
    method: 'delete'
});