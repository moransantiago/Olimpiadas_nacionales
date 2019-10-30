const joi = require('joi');
const { mongoIdSchema } = require('./general');

const userEmailSchema = joi.string().regex(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/im);
const userPasswordSchema = joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,20}$/);

const createUserSchema = joi.object({
    firstName: joi.string().max(15).min(2).required(),
    lastName: joi.string().max(15).min(2).required(),
    role: joi.string().valid('administrator', 'operator').required(),
    scopes: joi.array().min(1).items(joi.string().regex(/^([a-z]+):([a-z]+)$/)),
    email: userEmailSchema.required(),
    password: userPasswordSchema.required()
});

const updateUserSchema = joi.object({
    firstName: joi.string().max(15).min(2),
    lastName: joi.string().max(15).min(2),
    role: joi.string().valid('administrator', 'operator'),
    scopes: joi.array().min(1).items(joi.string().regex(/^([a-z]+):([a-z]+)$/)),
    email: userEmailSchema,
    profilePhoto: joi.string().regex(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/m)
});

module.exports = {
    userEmailSchema,
    userPasswordSchema,
    createUserSchema,
    updateUserSchema
}