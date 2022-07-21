import { getDbProvider, Settings } from "../data/index.ts";

export let settings: Settings;

export async function setupSettings() {
    const db = getDbProvider();

    settings = await db.settings.getDefault();
}
