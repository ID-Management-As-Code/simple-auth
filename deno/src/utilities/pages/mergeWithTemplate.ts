export function mergeWithTemplate(htmlSnippet: string, htmlTemplate: string): string {
    const page = htmlTemplate.replace('{rootView}', htmlSnippet);

    return page;
}
