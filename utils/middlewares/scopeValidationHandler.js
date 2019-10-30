const boom = require('boom');

const scopeValidationHandler = (requiredScopes) => {
    return (req, res, next) => {
        if(!req.user || (req.user && !req.user.scopes)){
            next(boom.unauthorized('Missing scopes'));
        }

        const { user } = req;

        const hasAccess = requiredScopes.map((requiredScope) => user.scopes.includes(requiredScope))
        .find(allowed => Boolean(allowed));

        if(hasAccess){
            next();
        }else{
            next(boom.unauthorized('Insuficient rights'));
        }
    };
}

module.exports = scopeValidationHandler;