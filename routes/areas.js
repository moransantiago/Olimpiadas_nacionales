const router = require('express').Router();

const AreaService = require('../services/area');

router.get('/', async (req, res, next) => {
    try {
        const areas = await AreaService.getAreas();

        res.status(200).json({
            data: areas,
            message: 'Areas retrived successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:areaId', async (req, res, next) => {
    const { areaId } = req.params;

    try {
        const area = await AreaService.getAreaById({ areaId });

        res.status(200).json({
            data: area,
            message: 'Area retrived successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    const { nombre_area } = req.body;

    try {
        await AreaService.createArea({ nombre_area });

        res.status(200).json({
            data: {},
            message: 'Area created successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:areaId', async (req, res, next) => {
    const { areaId } = req.params;
    const { nombre_area } = req.body;

    try {
        await AreaService.updateArea({ nombre_area, areaId });

        res.status(200).json({
            data: {},
            message: 'Area updated successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:areaId', async (req, res, next) => {
    const { areaId } = req.params;

    try {
        await AreaService.deleteArea({ areaId });

        res.status(200).json({
            data: {},
            message: 'Area deleted successfuly'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;