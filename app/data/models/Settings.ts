import { AuditDateTimes } from "@data/abstractions/AuditDateTimes.ts";

/**
 * Represents settings used for configuring the application.
 */
export interface Settings extends AuditDateTimes {
    /**
     * The primary identifier.
     */
    id: string;

    /**
     * A description of the site, to use for meta data information.
     */
    description: string;

    /**
     * Determines whether or not to use these as the default settings.
     */
    default?: boolean;

    /**
     * The name of the settings to use for easily switching between multiple
     * site settings.
     */
    name: string;

    /**
     * The name of the site, to be used for meta data information.
     */
    title: string;

    /**
     * Determines whether the site is currently in maintenance mode and able to
     * be used.
     */
    underMaintenance: boolean;
}
