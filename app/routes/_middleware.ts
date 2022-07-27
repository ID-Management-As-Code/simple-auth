import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { authentication, maintenance, staticFiles } from "../middleware/index.ts";

export const handler = async (request: Request, context: MiddlewareHandlerContext) => {
    const maintenanceResponse = maintenance()

    if (maintenanceResponse) return maintenanceResponse;

    const response = await context.next();

    const staticFilesResponse = staticFiles(request, response);

    if (staticFilesResponse) return staticFilesResponse;

    const authenticationResponse = authentication(request, response);

    if (authenticationResponse) return authenticationResponse;

    return response;
}
