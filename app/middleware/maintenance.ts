import { settings } from "@utilities/site.ts";

export function maintenance() {
    if (settings?.underMaintenance) {
        return new Response("Under maintenance, come back later.");
    }
}
