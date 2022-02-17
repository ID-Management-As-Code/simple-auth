import { Page } from '../routing/Page.ts';

export default class Home extends Page {
    public override render() {
        return `
            <h1>Hi der</h1>

            <img src="lock.png" alt="lock">
        `;
    }
}
