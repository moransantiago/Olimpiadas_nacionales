const router = require('express').Router();

const validate = require('../utils/middlewares/validationHandler');
const AlarmService = require('../services/alarm');

//Este endpoint sirve para obtener todas las alarmas
function trigger(app, {io, globalIo}){
    app.use('/api/trigger', router);

    router.post('/', async (req, res, next) => {
        const { location, area, type } = req.body;
        
        try {
            AlarmService.notifyAlarms(io, globalIo, { location, area, type });
            await AlarmService.createAlarm({ type, area, location });
            res.status(200).json({
                data: {},
                message: 'Alarm triggered succesfully'
            });
        } catch (err) {
            next(err)
        }
    });
}

module.exports = trigger;