import { walk } from '../../depts.ts';
import { fileOrDirectoryExists } from '../fs/fileOrDirectoryExists.ts';
import { Images } from '../../routing/Images.ts';

export async function buildImageRoutes(imagesDirectory: string): Promise<Images> {
    const directoryExists = await fileOrDirectoryExists(imagesDirectory);

    if (directoryExists) {
        const images: Images = {};

        const imageFiles = walk(imagesDirectory);

        for await (const file of imageFiles) {
            if (file.isFile) {
                const imageRoute = file.path.slice(imagesDirectory.length)
                    // Make the route URL compatible
                    .replaceAll('\\', '/');

                const image = await Deno.readFile(file.path);

                images[imageRoute] = image;
            }
        }

        return images;
    }

    throw new Error('The pages directory is required and must exist.')
}
