const Logger = require('../utils/logger');

module.exports = (io) => {
    io.on('connection', (socket) => {
        //Event types join|
        socket.on('trigger', (data) => {
            Logger.succesfull('Flagmen joined', `Flagmen: ${data.username} joined the room with id: ${socket.id}`);
            Rooms.userConnect({ socket, user: data });
        });
    });
}