"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const logger_1 = require("./logger");
const elegant_spinner_1 = __importDefault(require("elegant-spinner"));
const log_update_1 = __importDefault(require("log-update"));
class Loader {
    constructor({ default_color = "blue", default_message = '[message]', default_loader_message = '[loading]', default_time_message = '[time]' }) {
        this.default_color = default_color;
        this.default_message = default_message;
        this.default_loader_message = default_loader_message;
        this.default_time_message = default_time_message;
        this.arr = [];
        this.eneded = false;
        this.frame = elegant_spinner_1.default();
        this.int = setInterval(() => {
            log_update_1.default(this.arr.join('\n').toString().replace('[loading]', this.frame));
        }, 50);
    }
    load(message, _function, color = this.default_color) {
        return __awaiter(this, void 0, void 0, function* () {
            const start = Date.now();
            //@ts-ignore
            this.arr.push(chalk_1.default[color](`${this.default_loader_message}`) + ` ${this.default_message.replace('[message]', message)}`);
            yield _function().then(() => {
                const done = `${((Date.now() - start) / Math.pow(10, 3)).toFixed(1)}`;
                this.arr.pop();
                this.arr.push(`${logger_1.success(`${message} : ${chalk_1.default.underline.whiteBright(this.default_time_message.replace('[time]', done))}`)}s`);
            }).catch((err) => {
                const done = `${((Date.now() - start) / Math.pow(10, 3)).toFixed(1)}`;
                this.arr.pop();
                this.arr.push(`${logger_1.error(`${message}  (${err.message}): ${chalk_1.default.underline.whiteBright(done)}`)}s`);
            });
        });
    }
    end() {
        if (!this.int)
            throw Error('The loader is ended :).');
        clearInterval(this.int);
        this.int = null;
    }
    get ended() {
        return !this.int;
    }
}
exports.default = Loader;
