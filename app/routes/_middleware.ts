import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { settings } from "@utilities/site.ts";

export const handler = async (request: Request, context: MiddlewareHandlerContext) => {

    if (settings?.underMaintenance) {
        return new Response("Under maintenance, come back later.");
    }

    return await context.next();
}
