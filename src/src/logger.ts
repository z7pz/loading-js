import chalk from "chalk"
const symbols = {
    info: chalk.blue('ℹ'),
    success: chalk.green('✔'),
    warning: chalk.yellow('⚠'),
    error: chalk.red('✖')
}
const success = (message: string): string => {
    return `${symbols.success} ${message}`
}
const warning = (message: string): string => {
    return (`${symbols.warning} ${message}`)
}
const error = (message: string): string => {
    return (`${chalk.bold.red(symbols.error)} ${message}`)
}
const logging = (message: string): string => {
    return (`${symbols.info} ${message}`)
}



export {
    success,
    warning,
    error,
    logging,
}