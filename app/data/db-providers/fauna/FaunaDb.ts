import { Database, SettingsEntity } from "@data/abstractions/index.ts";
import { FaunaSettingsEntity } from "./entities/FaunaSettingsEntity.ts";

export class FaunaDb implements Database {
    settings: SettingsEntity;

    constructor() {
        this.settings = new FaunaSettingsEntity();
    }
}
