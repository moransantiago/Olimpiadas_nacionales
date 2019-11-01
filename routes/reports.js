const router = require('express').Router();

const ReportService = require('../services/report');

router.get('/', async (req, res, next) => {
    
    try {
        const reports = await ReportService.getReports();

        res.status(200).json({
            data: reports,
            message: 'Reports retrived successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:reportId', async (req, res, next) => {
    const { reportId } = req.params;
    
    try {
        const report = await ReportService.getReportById({ reportId });

        res.status(200).json({
            data: report,
            message: 'Report retrived successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    const report = req.body;
    
    try {
        await ReportService.createReport({ report });

        res.status(200).json({
            data: {},
            message: 'Report created successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:reportId', async (req, res, next) => {
    const { reportId } = req.params;
    const report = req.body;

    try {
        await ReportService.updateReport({ report, reportId });

        res.status(200).json({
            data: {},
            message: 'Report updated successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:reportId', async(req, res, next) => {
    const { reportId } = req.params;

    try {
        await ReportService.deleteReport({ reportId });

        res.status(200).json({
            data: {},
            message: 'Report deleted successfuly'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;