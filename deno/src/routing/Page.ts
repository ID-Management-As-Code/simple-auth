export abstract class Page {
    constructor(
        public title = 'SimpleAuth',
        public requiresAuthentication = true
    ) {}

    public abstract render(): string;
}
