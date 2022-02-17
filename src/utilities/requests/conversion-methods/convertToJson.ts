export async function convertToJson(request: Request) {
    return await request.json();
}

export const jsonMappings = ['application/json'];
