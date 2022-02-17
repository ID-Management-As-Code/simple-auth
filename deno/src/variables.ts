import { dirname, fromFileUrl } from './depts.ts';

export const rootDirectory = dirname(fromFileUrl(import.meta.url));
