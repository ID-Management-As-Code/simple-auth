export async function convertToBlob(request: Request) {
    return await request.blob();
}

export const blobMappings = ['application/octet-stream'];
