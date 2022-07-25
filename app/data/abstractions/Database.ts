import { SettingsEntity, UsersEntity } from "./entities/index.ts";

export interface Database {
    settings: SettingsEntity;
    users: UsersEntity;
}
