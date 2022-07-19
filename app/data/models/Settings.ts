/**
 * Represents settings used for configuring the application.
 */
export interface Settings {
    /**
     * The primary identifier.
     */
    id: string;

    /**
     * The ISO-formatted date-time the document was created at.
     */
    createdAt: string;

    /**
     * A description of the site, to use for meta data information.
     */
    description: string;

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

    /**
     * The ISO-formatted date-time the document was updated at.
     */
    updatedAt: string;
}
