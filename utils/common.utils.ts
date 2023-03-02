export const asyncPromiseWrapper = <T>(
  promise: Promise<T>
): Promise<T | null> => promise.then((result: T) => result).catch(() => null);
