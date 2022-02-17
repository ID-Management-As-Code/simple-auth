import { Page } from '../routing/Page.ts';

export default class Signin extends Page {
    constructor() {
        super('Signin - SimpleAuth', false);
    }

    public override render() {
        return `
            <form>
                <div>
                    <label for="username">Username</label>

                    <input type="text" name="username" id="username" required>
                </div>
                <div>
                    <label for="password">Password</label>

                    <input type="password" name="password" id="password" required>
                </div>
            </form>
        `;
    }
}
