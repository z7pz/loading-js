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
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
const src_1 = require("./src");
const loading = new src_1.Loader({
    // default_time_message: '[time]',
    // default_message: ' Message: [message]',
    // default_loader_message: '[loading]',
    default_color: 'blue'
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    yield loading.load('Downloading packages.', () => __awaiter(void 0, void 0, void 0, function* () { return yield sleep(5000); }), 'green');
    yield loading.load('Creating Files.', () => __awaiter(void 0, void 0, void 0, function* () { return yield sleep(2000); }));
    yield loading.load('Final step.', () => __awaiter(void 0, void 0, void 0, function* () {
        yield sleep(1000);
        throw Error('message');
    }));
    setTimeout(() => {
        loading.end();
    }, 3000);
}))();
// console.clear()
// import { error, success } from './logger'
// import elegantSpinner from 'elegant-spinner'
// import logUpdate from 'log-update'
// const arr: string[] = [];
// const frame = elegantSpinner();
// function sleep(ms: number) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// setInterval(() => {
//     logUpdate(arr.join('\n').toString().replace('[loading]', frame))
// }, 50);
// (async () => {
//     async function loading (message: string, _function: Function) {
//         arr.push('[loading] '+ message)
//             await _function().then(() => {
//                 arr.pop();
//                 arr.push(success(message))
//             }).catch((err: Error) => {
//                 arr.pop();
//                 arr.push(error(message + ` (${err.message})`))
//             })            
//             return;    
//     }
//     await loading(`Downloading packages`, () => sleep(2000))
//     await loading(`Making files`, () => sleep(2000))
//     await loading(`Making files`, () => sleep(2000))
//     await loading(`Making files`, () => sleep(2000))
// })();
