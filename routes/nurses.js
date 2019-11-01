const router = require('express').Router();

const NurseService = require('../services/nurse');

router.get('/', async (req, res, next) => {
    try {
        const nurses = await NurseService.getNurses();

        res.status(200).json({
            data: nurses,
            message: 'Nurses retrived successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:nurseId', async (req, res, next) => {
    const { nurseId } = req.params;

    try {
        const nurse = await NurseService.getNurseById({ nurseId });

        res.status(200).json({
            data: nurse,
            message: 'Nurse retrived successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    const nurse = req.body;

    try {
        await NurseService.createNurse({ nurse });

        res.status(200).json({
            data: {},
            message: 'Nurse created successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:nurseId', async (req, res, next) => {
    const { nurseId } = req.params;
    const nurse = req.body;

    try {
        await NurseService.updateNurse({ nurse, nurseId });

        res.status(200).json({
            data: {},
            message: 'Nurse updated successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:nurseId', async (req, res, next) => {
    const { nurseId } = req.params;

    try {
        await NurseService.deleteNurse({ nurseId });

        res.status(200).json({
            data: {},
            message: 'Nurse deleted successfuly'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;