const chalk = require('chalk');
const gradient = require('gradient-string');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF00FF").bold('[ ERROR ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF00FF").bold('[ ERROR ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#00BFFF").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {

		case "warn":
			console.log(gradient.rainbow('[ SHANKAR ] » ') + data);
			break;
		case "error":
			console.log(gradient.rainbow('[ SHANKAR ] » ') + data);
			break;
		default:
			console.log(gradient.rainbow('[ SHANKAR ] » ') + data);
			break;
	}
	}
