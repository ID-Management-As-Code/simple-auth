export async function fileOrDirectoryExists(path: string): Promise<boolean> {
    try {
        await Deno.stat(path);

        return true;
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            return false;
        }

        throw error;
    }
}
