const joi = require('joi');
const boom = require('boom');

const validate = (data, schema) => {
    const { error } = joi.validate(data, schema);
    return error;
}

const validationHandler = (schema, check = "body") => {
    return (req, res, next) => {
        const error = validate(req[check], schema)
        if(error){
            next(boom.badRequest(error));
        }else{
            next();
        }
    }
}

module.exports = validationHandler;