import type Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export const setLenisInstance = (instance: Lenis | null): void => {
  lenisInstance = instance;
};

export const stopLenis = (): void => {
  lenisInstance?.stop();
};

export const startLenis = (): void => {
  lenisInstance?.start();
};
