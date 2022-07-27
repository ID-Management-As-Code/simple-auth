import { argon2id, argon2Verify } from "$argon";
import { crypto } from "$std/crypto/mod.ts";
import { EnvKey, getEnvValue } from "./env.ts";

export const hashPassword = async (password: string) => await argon2id({
    password,
    hashLength: getEnvValue<number>(EnvKey.ARGON_HASH_LENGTH) || 256,
    iterations: getEnvValue<number>(EnvKey.ARGON_ITERATIONS) || 256,
    memorySize: getEnvValue<number>(EnvKey.ARGON_MEMORY_SIZE) || 4096,
    outputType: "encoded",
    parallelism: getEnvValue<number>(EnvKey.ARGON_PARALLELISM) || 4,
    salt: crypto.getRandomValues(new Uint16Array(32)),
});

export const verifyPassword = async (password: string, hash: string) => await argon2Verify({
    password,
    hash
});
