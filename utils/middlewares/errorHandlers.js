const { srvConfig } = require('../../config');
const boom = require('boom');
const isRequestAjaxOrApi = require('../isRequestAjaxOrApi');

function withErrorStack(err, stack){
    if ( srvConfig.dev ) {
        return { ...err, stack }
    }
    return err;
}

function logErrors(err, req, res, next){
    if(srvConfig.dev){
        console.log(err);
    }
    next(err);
}

function wrapErrors(err, req, res, next){
    if (!err.isBoom){
        next(boom.badImplementation(err));
    }

    next(err)
}

function clientErrorHandler(err, req, res, next){
    const { 
        output: { statusCode, payload } 
    } = err; 

    //Catch errors for AJAX request or if an error ucurrs while streaming
    if(isRequestAjaxOrApi(req) || res.headersSent) {
        res.status(statusCode).json( withErrorStack(payload, err.stack) );
    }else{
        next(err);
    }
}

function errorHandler(err, req, res, next){
    const {
        output: { statusCode, payload } 
    } = err

    res.status( statusCode ).render("error", { error: withErrorStack( payload, err.stack )});

    next(err)
    
}

module.exports = {
    logErrors,
    wrapErrors,
    clientErrorHandler,
    errorHandler
}