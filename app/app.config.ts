type DbProvider = "fauna";

/**
 * Settings used for configuring the application.
 */
interface AppConfiguration {
    dbProvider: DbProvider;
}

/**
 * Settings used for configuring the application.
 */
const appConfig: AppConfiguration = {
    dbProvider: "fauna"
};

/**
 * Gets the current {@link appConfig} based on the environment (not setup yet).
 *
 * @returns The current version of {@link appConfig}
 */
export function getAppConfig() {
    return appConfig;
}
