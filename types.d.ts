export declare function once<T extends any[], R>(fn: (...args: T) => R): (...args: T) => R | undefined;
export declare function onceStrict<T extends any[], R>(fn: (...args: T) => R): (...args: T) => R;
