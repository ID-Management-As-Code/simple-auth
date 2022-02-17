export async function convertToText(request: Request) {
  return await request.text();
}

export const textMappings = [
    "text/css",
    "text/html",
    "text/javascript",
    "text/plain",
    "text/xml",
];
