import chalk from 'chalk';
import { error, success } from './logger'
import elegantSpinner from 'elegant-spinner';
import logUpdate from 'log-update';

export default class Loader {
    private arr: string[];
    public eneded: boolean;
    private frame: ReturnType<typeof elegantSpinner>;
    private int: ReturnType<typeof setTimeout> | null;
    private default_color: string;
    private default_message: string;
    private default_time_message: string;
    private default_loader_message: string;
    constructor({
        default_color = "blue",
        default_message = '[message]',
        default_loader_message = '[loading]',
        default_time_message = '[time]'
    }: {
        default_color?: string | undefined,
        default_loader_message?: string | undefined,
        default_message?: string | undefined,
        default_time_message?: string | undefined,
    }) {
        this.default_color = default_color;
        this.default_message = default_message;
        this.default_loader_message = default_loader_message;
        this.default_time_message = default_time_message;
        this.arr = [];
        this.eneded = false;
        this.frame = elegantSpinner();
        this.int = setInterval(() => {
            logUpdate(this.arr.join('\n').toString().replace('[loading]', this.frame))
        }, 50);
    }

    async load(message: string, _function: Function, color: string = this.default_color): Promise<void> {
        const start = Date.now();
        //@ts-ignore
        this.arr.push(chalk[color](`${this.default_loader_message}`) + ` ${this.default_message.replace('[message]', message)}`)
        await _function().then(() => {
            const done = `${((Date.now() - start) / 10 ** 3).toFixed(1)}`;
            this.arr.pop();
            this.arr.push(`${success(`${message} : ${chalk.underline.whiteBright(this.default_time_message.replace('[time]', done))}`)}s`)
        }).catch((err: Error): void => {
            const done = `${((Date.now() - start) / 10 ** 3).toFixed(1)}`;
            this.arr.pop();
            this.arr.push(`${error(`${message}  (${err.message}): ${chalk.underline.whiteBright(done)}`)}s`)
        })
    }

    end(): void {
        if (!this.int) throw Error('The loader is ended :).');
        clearInterval(this.int)
        this.int = null;
    }
    get ended(): Boolean {
        return !this.int
    }
    
}