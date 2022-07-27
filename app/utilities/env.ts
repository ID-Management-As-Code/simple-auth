export enum EnvKey {
    ADMIN_PASSWORD = "ADMIN_PASSWORD",
    ADMIN_USERNAME = "ADMIN_USERNAME",
    APP_ID = "APP_ID",
    ARGON_HASH_LENGTH = "ARGON_HASH_LENGTH",
    ARGON_ITERATIONS = "ARGON_ITERATIONS",
    ARGON_MEMORY_SIZE = "ARGON_MEMORY_SIZE",
    ARGON_PARALLELISM = "ARGON_PARALLELISM",
    DB_PROVIDER = "DB_PROVIDER",
    FAUNA_ENDPOINT = "FAUNA_ENDPOINT",
    FAUNA_SECRET = "FAUNA_SECRET"
}

export function getEnvValue<TValue>(key: EnvKey) {
    const value = Deno.env.get(key);

    if (!value) return;

    const valueNumber = +value;

    if (!isNaN(valueNumber)) return valueNumber as unknown as TValue;

    if (value === "true") return true as unknown as TValue;

    if (value === "false") return false as unknown as TValue;

    return value as unknown as TValue;
}
