const router = require('express').Router();

const UserService = require('../services/user');

router.get('/', async (req, res, next) => {
    
    try {
        const users = await UserService.getUsers();

        res.status(200).json({
            data: users,
            message: 'Users retrived successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:userId', async (req, res, next) => {
    const { userId } = req.params;

    try {
        const user = await UserService.getUserById({ userId });

        res.status(200).json({
            data: user,
            message: 'User retrived successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    const user = req.body;

    try {
        await UserService.createUser({ user });

        res.status(200).json({
            data: {},
            message: 'User created successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.put('/:userId', async (req, res, next) => {
    const { userId } = req.params;
    const user = req.body;

    try {
        await UserService.updateUser({ user, userId });

        res.status(200).json({
            data: {},
            message: 'User updated successfuly'
        });
    } catch (err) {
        next(err);
    }
});

router.delete('/:userId', async (req, res, next) => {
    const { userId } = req.params;

    try {
        await UserService.deleteUser({ userId });

        res.status(200).json({
            data: {},
            message: 'User deleted successfuly'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;