import {  } from "$fauna";
import { SettingsEntity } from "@data/abstractions/index.ts";
import { Settings } from "@data/models/Settings.ts";

export class FaunaSettingsEntity implements SettingsEntity {
    add(settings: Settings): void {
        throw new Error("Method not implemented.");
    }

    getAll(): Settings[] {
        throw new Error("Method not implemented.");
    }

    getById(id: string): Settings {
        throw new Error("Method not implemented.");
    }

    remove(id: string): void {
        throw new Error("Method not implemented.");
    }

    update(settings: Settings): void {
        throw new Error("Method not implemented.");
    }
}
