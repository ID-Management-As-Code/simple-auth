import { join, walk } from '../../depts.ts';
import { fileOrDirectoryExists } from '../fs/fileOrDirectoryExists.ts';
import { Route } from '../../routing/Route.ts';
import { Routes } from '../../routing/Routes.ts';
import { Page } from '../../routing/Page.ts';

export async function buildPageRoutes(pagesDirectory: string): Promise<Routes> {
    const directoryExists = await fileOrDirectoryExists(pagesDirectory);

    if (directoryExists) {
        const routes: Routes = {};

        const pageFiles = walk(pagesDirectory);

        for await (const file of pageFiles) {
            if (file.isFile) {
                const pageRoute = file.path.slice(pagesDirectory.length, -3)
                    // Make the route URL compatible
                    .replace('index', '')
                    .replaceAll('\\', '/');

                const pageModule = await import(join('file://', file.path));
                const PageClass = pageModule.default;
                const page: Page = new PageClass();
                const route = new Route(pageRoute, page);

                routes[pageRoute] = route;
            }
        }

        return routes;
    }

    throw new Error('The pages directory is required and must exist.')
}
