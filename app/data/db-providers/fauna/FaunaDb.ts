import { Client } from "$fauna";
import { Database, SettingsEntity } from "@data/abstractions/index.ts";
import { FaunaSettingsEntity } from "./entities/FaunaSettingsEntity.ts";

export class FaunaDb implements Database {
    private client: Client;

    settings: SettingsEntity;

    constructor() {
        const secret = Deno.env.get("FAUNA_SECRET");

        if (!secret) throw new Error("The FAUNA_SECRET environment variable is required.");

        this.client = new Client({
            domain: Deno.env.get("FAUNA_ENDPOINT"),
            secret: secret
        });

        this.settings = new FaunaSettingsEntity(this.client);
    }
}
