export function isFileRequest(path: string): boolean {
    const pathSegments = path.split('.');
    const lastPathSegmentIndex = pathSegments.length - 1
    const lastPathSegment = pathSegments[lastPathSegmentIndex];

    const notSlashOrEmpty = path.lastIndexOf('/') !== lastPathSegmentIndex
        && lastPathSegment !== '';

    return pathSegments.length > 1 && notSlashOrEmpty
}
