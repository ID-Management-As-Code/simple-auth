const safePaths = [
    "/_frsh",
    "/images",
    "/styles"
];

export function staticFiles(request: Request, response: Response) {
    const url = new URL(request.url);

    if (safePaths.find(path => url.pathname.indexOf(path) >= 0)) {
        return response;
    }
}
