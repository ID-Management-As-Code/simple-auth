import { isUserAuthenticated } from "@utilities/session.ts";

export function authentication(request: Request, _: Response) {
    const url = new URL(request.url);

    const authenticated = isUserAuthenticated(request);

    if (!authenticated && url.pathname !== "/login") {
        return Response.redirect(url.origin + "/login", 302);
    }

    if (authenticated && url.pathname === "/login") {
        return Response.redirect(url.origin, 303);
    }
}
