export function getMimeType(path: string): string {
    const imageType = path.split('.')[1];

    switch (imageType) {
        case 'png':
            return 'image/png';

        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';

        case 'gif':
            return 'image/gif';

        case 'svg':
            return 'image/svg+xml';
    }

    throw new Error(`The image type for file extension '${imageType}' is not currently supported`);
}
