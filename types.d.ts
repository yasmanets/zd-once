export declare function once<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T> | undefined;

export declare function onceStrict<T extends (...args: any[]) => any>(
  fn: T
): (...args: Parameters<T>) => ReturnType<T>;