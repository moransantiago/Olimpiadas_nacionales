const router = require('express').Router();

const validate = require('../utils/middlewares/validationHandler');
const AlarmService = require('../services/alarm');

//Este endpoint sirve para obtener todas las alarmas
router.get('/', async (req, res, next) => {
    try {
        const alarms = await AlarmService.getAlarms();
        res.status(200).json({
            data: alarms,
            message: 'Alarms retrived succesfully'
        });
    } catch (err) {
        next(err)
    }
});

//Este endpoint sirve para obtener una alarma especifica por ID
router.get('/:alarmId', async (req, res, next) => {
    const { alarmId } = req.params;

    try {
        const alarm = await AlarmService.getAlarmById(alarmId);
        res.status(200).json({
            data: alarm,
            message: 'Alarm retrived succesfully'
        });
    } catch (err) {
        next(err)
    }
});

module.exports = router;