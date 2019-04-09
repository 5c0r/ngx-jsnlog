// Quite a simple logger...
export interface Logger {
    info(info: any);
    error(err: any);
    debug(debugInfo: any);
    fatalException(fatalInfo: any, exception: Error);
}
