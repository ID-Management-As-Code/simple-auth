import { Page } from '../../routing/Page.ts';

export default class Settings extends Page {
    constructor() {
        super('Account Settings - SimpleAuth');
    }

    public override render() {
        return `
            <div>
                <h1>Settings</h1>
            </div>
        `;
    }
}
