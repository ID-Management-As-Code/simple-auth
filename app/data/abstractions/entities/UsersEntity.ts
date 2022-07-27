import { User } from "@data/models/User.ts";
import { Entity } from "../Entity.ts";

export interface UsersEntity extends Entity<User> {
    getByInternalId(id: string): Promise<User | undefined>;
    getByUsername(username: string): Promise<User | undefined>;
}
