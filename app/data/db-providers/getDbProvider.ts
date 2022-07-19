import { getAppConfig } from "@appConfig";
import { Database } from "../abstractions/index.ts";
import { FaunaDb } from "./fauna/FaunaDb.ts";

export function getDbProvider(): Database {
    const configuration = getAppConfig();

    switch (configuration.dbProvider) {
        case "fauna": return new FaunaDb();

        default: throw new Error(`A database provider for ${configuration.dbProvider} could not be found.`);
    }
}
