import axios from 'axios';

// const API_URL = 'http://192.168.30.7:4000';
const API_URL = 'http://181.229.213.140:5555';

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

export const getArea = id => axios({   //<-- Get
    url: `${API_URL}/api/areas/${id}`,
    method: 'get'
});

export const setArea = areaName => axios({  //<-- Post
    url: `${API_URL}/api/areas`,
    method: 'post',
    data: {
        nombre_area: areaName
    }
});

export const updateArea = (id, area) => axios({  //<-- Update
    url: `${API_URL}/api/areas/${id}`,
    method: 'put',
    data: {
        nombre_area: area.nombre_area
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

export const getUser = id => axios({   //<-- Get
    url: `${API_URL}/api/users/${id}`,
    method: 'get'
});

export const updateUser = (id, user) => axios({   //<-- Get
    url: `${API_URL}/api/users/${id}`,
    method: 'put',
    data: {
        nombre_usuario: user.nombre_usuario,
        apellido_usuario: user.apellido_usuario,
        email_usuario: user.email_usuario,
        telefono_usuario: user.telefono_usuario,
        tipo_usuario: user.tipo_usuario
    }
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

export const getFichas = () => axios({   //<-- Get
    url: `${API_URL}/api/patients`,
    method: 'get'
});

export const getFicha = id => axios({   //<-- Get
    url: `${API_URL}/api/patients/${id}`,
    method: 'get'
});

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

export const updateFicha = (id, patient) => axios({  //<-- Put
    url: `${API_URL}/api/patients/${id}`,
    method: 'put',
    data: {
        nombre_pasiente: patient.nombre_pasiente,
        apellido_pasiente: patient.apellido_pasiente,
        telefono_pasiente: patient.telefono_pasiente,
        dni_pasiente: patient.dni_pasiente,
        ubicacion_pasiente: patient.ubicacion_pasiente,
        alergia: patient.alergia,
        estado: patient.estado,
    }
});

export const deleteFicha = id => axios({   //<-- Get
    url: `${API_URL}/api/patients/${id}`,
    method: 'delete'
});

//  Nurses

export const getNurses = () => axios({   //<-- Get
    url: `${API_URL}/api/nurses`,
    method: 'get'
});

export const getNurse = id => axios({   //<-- Get
    url: `${API_URL}/api/nurses/${id}`,
    method: 'get'
});

export const setNurse = nurse => axios({  //<-- Post
    url: `${API_URL}/api/nurses`,
    method: 'post',
    data: {
        nombre_enfermero: nurse.nombre_enfermero,
        apellido_enfermero: nurse.apellido_enfermero,
        especialidad: nurse.especialidad,
    }
});

export const updateNurse = (id, nurse) => axios({  //<-- Put
    url: `${API_URL}/api/nurses/${id}`,
    method: 'put',
    data: {
        nombre_enfermero: nurse.nombre_enfermero,
        apellido_enfermero: nurse.apellido_enfermero,
        especialidad: nurse.especialidad,
    }
});

export const deleteNurse = id => axios({   //<-- Delete
    url: `${API_URL}/api/nurses/${id}`,
    method: 'delete'
});

//  Reports

export const getReports = () => axios({   //<-- Get
    url: `${API_URL}/api/reports`,
    method: 'get'
});

export const setReport = report => axios({  //<-- Post
    url: `${API_URL}/api/reports`,
    method: 'post',
    data: {
        enfermero_reporte: report.enfermero_reporte,
        pasiente_reporte: report.pasiente_reporte,
        alarma_reporte: report.alarma_reporte,
        atendido_reportes: report.atendido_reportes,
        descripcion_reporte: report.descripcion_reporte
    }
});