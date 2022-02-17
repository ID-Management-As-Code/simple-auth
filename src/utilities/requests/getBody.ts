import { getConversionMethod } from './getConversionMethod.ts';

export async function getBody(request: Request): Promise<unknown> {
    if (request.method === 'GET') return null;
    if (!request.body) return null;

    const contentType = request.headers.get('content-type');

    if (!contentType) return null;

    const conversionMethod = getConversionMethod(contentType);

    return await conversionMethod(request);
}

