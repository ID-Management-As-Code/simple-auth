import fauna from "$fauna";
import { Database, SettingsEntity, UsersEntity } from "@data/abstractions/index.ts";
import { EnvKey, getEnvValue } from "@utilities/env.ts";
import { FaunaSettingsEntity, FaunaUsersEntity } from "./entities/index.ts";

export class FaunaDb implements Database {
    private client: fauna.Client;

    settings: SettingsEntity;
    users: UsersEntity;

    constructor() {
        const secret = getEnvValue<string>(EnvKey.FAUNA_SECRET);

        if (!secret) throw new Error(`The ${EnvKey.FAUNA_SECRET} environment variable is required.`);

        this.client = new fauna.Client({
            domain: getEnvValue(EnvKey.FAUNA_ENDPOINT),
            secret
        });

        this.settings = new FaunaSettingsEntity(this.client);
        this.users = new FaunaUsersEntity(this.client);
    }
}
