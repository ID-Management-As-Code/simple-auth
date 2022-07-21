import { Database } from "../abstractions/index.ts";
import { FaunaDb } from "./fauna/FaunaDb.ts";

export function getDbProvider(): Database {
    const dbProvider = Deno.env.get("DB_PROVIDER");

    switch (dbProvider) {
        case "fauna": return new FaunaDb();

        default: throw new Error(
            `A database provider for (${dbProvider}) could not be found. `
            + 'Please ensure a valid value is assigned to the DB_PROVIDER environment variable.'
        );
    }
}
