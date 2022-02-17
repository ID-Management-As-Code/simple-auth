export async function convertToFormData(request: Request) {
    return await request.formData();
}

export const formDataMappings = ['multipart/form-data'];
