export function getHeaders(headers: Headers, ...keys: string[]): Record<string, string | null> {
    const headerKeyValues: Record<string, string | null> = {};

    if (keys && keys.length > 0) {
        keys.forEach(key => {
            headerKeyValues[key] = headers.get(key);
        });
    } else {
        for (const [key, value] of headers.entries()) {
            headerKeyValues[key] = value;
        }
    }

    return headerKeyValues;
}
