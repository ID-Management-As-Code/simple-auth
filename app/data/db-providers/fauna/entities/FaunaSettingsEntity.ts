import fauna from "$fauna";
import { SettingsEntity } from "@data/abstractions/index.ts";
import { Settings } from "@data/models/Settings.ts";

const { query } = fauna;

type SettingsDocument = fauna.values.Document<Settings>;
type SettingsPage = fauna.values.Page<SettingsDocument>;

export class FaunaSettingsEntity implements SettingsEntity {
    private collection = "settings";

    constructor(private client: fauna.Client) {}

    async add(settings: Settings) {
        const document = await this.client.query<SettingsDocument>(
            query.Create(
                query.Collection(this.collection),
                { data: settings }
            )
        );

        settings.id = document.ref.id;
    }

    async getAll() {
        const documents = await this.client.query<SettingsPage>(
            query.Map(
                query.Paginate(
                    query.Documents(
                        query.Collection(this.collection)
                    )
                ),
                query.Lambda(
                    'ref',
                    query.Get(
                        query.Var('ref')
                    )
                )
            )
        );

        return documents.data.map(document => ({ ...document.data, id: document.ref.id }));
    }

    async getById(id: string) {
        const document = await this.client.query<SettingsDocument>(
            query.Get(
                query.Ref(
                    query.Collection(this.collection),
                    id
                )
            )
        );

        return { ...document.data, id: document.ref.id };
    }

    async getDefault() {
        const document = await this.client.query<SettingsDocument>(
            query.Get(
                query.Match(
                    query.Index("settings_by_default"),
                    true
                )
            )
        );

        return { ...document.data, id: document.ref.id };
    }

    async remove(id: string) {
        await this.client.query<SettingsDocument>(
            query.Delete(
                query.Ref(query.Collection(this.collection), id)
            )
        );
    }

    async update(settings: Settings) {
        const { id, ...data } = settings;

        await this.client.query<SettingsDocument>(
            query.Update(
                query.Ref(query.Collection(this.collection), id),
                { data }
            )
        );
    }
}
