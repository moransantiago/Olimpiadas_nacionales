const chalk = require('chalk');

const defaultOptions = {
    titleBold: false
}

class Logger{
    constructor(){}

    succesfull(title, description, options = defaultOptions){
        const styledTitle = options.titleBold ? chalk.green.bold(title + ':') : chalk.green(title + ':');
        const styledDescription = description;

        console.log(`${styledTitle} ${styledDescription}`)
    }

    error(title, description, options = defaultOptions){
        const styledTitle = options.titleBold ? chalk.red.bold(title + ':') : chalk.red(title + ':');
        const styledDescription = description;

        console.log(`${styledTitle} ${styledDescription}`)
    }

    warning(title, description, options = defaultOptions){
        const styledTitle = options.titleBold ? chalk.yellow.bold(title + ':') : chalk.yellow(title + ':');
        const styledDescription = description;

        console.log(`${styledTitle} ${styledDescription}`)
    }
}

module.exports = new Logger();