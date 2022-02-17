import { walk } from '../../depts.ts';
import { fileOrDirectoryExists } from '../fs/fileOrDirectoryExists.ts';
import { Styles } from '../../routing/Styles.ts';

export async function buildStyleRoutes(stylesDirectory: string): Promise<Styles> {
    const directoryExists = await fileOrDirectoryExists(stylesDirectory);

    if (directoryExists) {
        const styles: Styles = {};

        const styleFiles = walk(stylesDirectory);

        for await (const file of styleFiles) {
            if (file.isFile) {
                const styleRoute = file.path.slice(stylesDirectory.length)
                    // Make the route URL compatible
                    .replaceAll('\\', '/');

                const css = await Deno.readTextFile(file.path);

                styles[styleRoute] = css;
            }
        }

        return styles;
    }

    throw new Error('The pages directory is required and must exist.')
}
