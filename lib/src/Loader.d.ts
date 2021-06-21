export default class Loader {
    private arr;
    eneded: boolean;
    private frame;
    private int;
    private default_color;
    private default_message;
    private default_time_message;
    private default_loader_message;
    constructor({ default_color, default_message, default_loader_message, default_time_message }: {
        default_color?: string | undefined;
        default_loader_message?: string | undefined;
        default_message?: string | undefined;
        default_time_message?: string | undefined;
    });
    load(message: string, _function: Function, color?: string): Promise<void>;
    end(): void;
    get ended(): Boolean;
}
