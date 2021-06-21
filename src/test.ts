console.clear()
import Loader from './src'
const loading = new Loader({
    // default_time_message: '[time]',
    // default_message: ' Message: [message]',
    // default_loader_message: '[loading]',
    default_color: 'blue'
});
(async () => {
    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await loading.load('Downloading packages.', async() => await sleep(5000), 'green');
    await loading.load('Creating Files.', async() => await sleep(2000));
    await loading.load('Final step.', async() => {
        await sleep(1000)
        throw Error('message')
    });
    
    setTimeout(() => {
        loading.end()
    }, 3000);
})();














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
