import { AuditDateTimes } from "@data/abstractions/AuditDateTimes.ts";

export interface User extends AuditDateTimes {
    id: string;

    disabled?: boolean;

    internalId: string;

    isAdmin?: boolean;

    passwordHash: string;

    username: string;
}
