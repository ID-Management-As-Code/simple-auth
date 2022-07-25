export interface Entity<TModel> {
    add(settings: TModel): Promise<void>;
    getAll(): Promise<TModel[]>;
    getById(id: string): Promise<TModel | undefined>;
    remove(id: string): Promise<void>;
    update(settings: TModel): Promise<void>;
}
