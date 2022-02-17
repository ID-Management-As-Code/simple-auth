import { ConnInfo, join } from '../depts.ts';
import { rootDirectory } from '../variables.ts';
import { mergeWithTemplate } from '../utilities/pages/mergeWithTemplate.ts';
import { buildPageRoutes } from '../utilities/pages/buildPageRoutes.ts';
import { buildStyleRoutes } from '../utilities/pages/buildStyleRoutes.ts';
import { buildImageRoutes } from '../utilities/pages/buildImageRoutes.ts';
import { getMimeType } from '../utilities/images/getMimeType.ts';
import { isFileRequest } from '../utilities/requests/isFileRequest.ts';

export async function startup() {
    // const apisDirectory = join(rootDirectory, 'apis');
    const imagesDirectory = join(rootDirectory, 'public/images');
    const pagesDirectory = join(rootDirectory, 'pages');
    const stylesDirectory = join(rootDirectory, 'public/css');

    // const apiRoutes = await buildApiRoutes(apisDirectory);
    const imageRoutes = await buildImageRoutes(imagesDirectory);
    const pageRoutes = await buildPageRoutes(pagesDirectory);
    const styleRoutes = await buildStyleRoutes(stylesDirectory);

    const htmlTemplate = Deno.readTextFileSync(join(rootDirectory, 'public/index.html'));

    return (request: Request, connnectionInfo: ConnInfo): Response => {
        const accept = request.headers.get('accept');
        const requestUrl = new URL(request.url);

        if (isFileRequest(requestUrl.pathname) && accept) {
            if (accept.indexOf('text/css') >= 0) {
                const css = styleRoutes[requestUrl.pathname];

                return new Response(css, {
                    headers: {
                        'content-type': 'text/css'
                    }
                });
            }

            if (accept.indexOf('image/') >= 0) {
                const image = imageRoutes[requestUrl.pathname];

                return new Response(image, {
                    headers: {
                        'content-type': getMimeType(requestUrl.pathname)
                    }
                });
            }
        }

        const route = pageRoutes[requestUrl.pathname];

        if (route) {
            const match = route.isMatch(request.url);

            if (match) {
                const htmlSnippet = route.page.render();
                const html = mergeWithTemplate(htmlSnippet, htmlTemplate).replace('{title}', route.page.title);

                return new Response(html, {
                    headers: {
                        'content-type': 'text/html'
                    }
                })
            }
        }

        return new Response(null, { status: 404 });
    };
}
