import { EnvKey, getEnvValue } from "@utilities/env.ts";
import { Database } from "../abstractions/index.ts";
import { FaunaDb } from "./fauna/FaunaDb.ts";

export function getDbProvider(): Database {
    const dbProvider = getEnvValue<string>(EnvKey.DB_PROVIDER);

    // TODO: Look into the performance/efficiency of setting a single database
    //       instance rather than return a new object every time.
    switch (dbProvider) {
        case "fauna": return new FaunaDb();

        default: throw new Error(
            `A database provider for (${dbProvider}) could not be found. `
            + `Please ensure a valid value is assigned to the ${EnvKey.DB_PROVIDER} environment variable.`
        );
    }
}
