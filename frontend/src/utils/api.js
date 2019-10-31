import axios from 'axios';  

const API_URL = 'http://192.168.30.7:4000';

// Alarms

export const getAlarms = (email, password) => axios({
    url: `${API_URL}/api/alarm`,
    method: 'get',
    // auth: {
    //     password,
    //     username: email
    // }
});

export const sendAlarm = (area, location, type) => axios({
    url: `${API_URL}/api/trigger`,
    method: 'post',
    data: {
        location: location,
        area: area,
        type: type,
    }
});

// Areas

export const getAreas = () => axios({
    url: `${API_URL}/api/areas`,
    method: 'get'
});

export const setArea = areaName => axios({
    url: `${API_URL}/api/areas`,
    method: 'post',
    data: {
        area: areaName
    }
});