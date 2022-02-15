import { ConnInfo } from '../depts.ts';

export function serverHandler(request: Request, connnectionInfo: ConnInfo): Response {
    return new Response('Hi der');
}
