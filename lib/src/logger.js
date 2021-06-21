"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logging = exports.error = exports.warning = exports.success = void 0;
const chalk_1 = __importDefault(require("chalk"));
const symbols = {
    info: chalk_1.default.blue('ℹ'),
    success: chalk_1.default.green('✔'),
    warning: chalk_1.default.yellow('⚠'),
    error: chalk_1.default.red('✖')
};
const success = (message) => {
    return `${symbols.success} ${message}`;
};
exports.success = success;
const warning = (message) => {
    return (`${symbols.warning} ${message}`);
};
exports.warning = warning;
const error = (message) => {
    return (`${chalk_1.default.bold.red(symbols.error)} ${message}`);
};
exports.error = error;
const logging = (message) => {
    return (`${symbols.info} ${message}`);
};
exports.logging = logging;
