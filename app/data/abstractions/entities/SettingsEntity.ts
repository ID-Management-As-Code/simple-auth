import { Settings } from "@data/models/Settings.ts";

export interface SettingsEntity {
    add(settings: Settings): void;
    getAll(): Settings[];
    getById(id: string): Settings;
    remove(id: string): void;
    update(settings: Settings): void;
}
