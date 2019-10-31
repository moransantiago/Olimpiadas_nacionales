const router = require('express').Router();

const PatientService = require('../services/patient');

router.get('/', async (req, res, next) => {
    
    try {
        const patients = await PatientService.getPatients();

        res.status(200).json({
            data: patients,
            message: 'Patients retrived successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:patientId', async (req, res, next) => {
    const { patientId } = req.params;

    try {
        const patient = await PatientService.getPatientById({ patientId });

        res.status(200).json({
            data: patient,
            message: 'Patient retrived successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    const patient = req.body;

    try {
        await PatientService.createPatient({ patient });

        res.status(200).json({
            data: {},
            message: 'Patients created successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:patientId', async (req, res, next) => {
    const { patientId } = req.params;
    const patient = req.body;

    try {
        await PatientService.updatePatient({ patient, patientId });

        res.status(200).json({
            data: {},
            message: 'Patient updated successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:patientId', async (req, res, next) => {
    const { patientId } = req.params;

    try {
        await PatientService.deletePatient({ patientId });

        res.status(200).json({
            data: {},
            message: 'Patient deleted successfuly'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;