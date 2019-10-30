const joi = require('joi');

const { createProductorSchema } = require('./productor')
const { createUserSchema } = require('./user');

const signUpSchema = joi.object({
    user: createUserSchema.required(),
    productor: createProductorSchema.required(),
})

module.exports = {
    signUpSchema
}