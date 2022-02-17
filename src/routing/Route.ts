import { Page } from "./Page.ts";

export class Route {
    private pattern!: URLPattern;

    constructor(pathname: string,  public page: Page) {
        if (!pathname) throw new Error('The pathname is required for creating a URL pattern matcher.');
        if (!page) throw new Error('The page to display is required for rendering HTML for page routes.');

        this.pattern = new URLPattern({ pathname });
    }

    public isMatch(url: string) {
        return this.pattern.exec(url);
    }
}
