import fauna from "$fauna";
import { UsersEntity } from "@data/abstractions/index.ts";
import { User } from "@data/index.ts";

const { query } = fauna;

type UsersDocument = fauna.values.Document<User>;
type UsersPage = fauna.values.Page<UsersDocument>;

export class FaunaUsersEntity implements UsersEntity {
    private collection = "users";

    constructor(private client: fauna.Client) {}

    async add(user: User) {
        const { id: _, ...data } = user;

        const document = await this.client.query<UsersDocument>(
            query.Create(
                query.Collection(this.collection),
                { data }
            )
        );

        user.id = document.ref.id;
    }

    async getAll() {
        const documents = await this.client.query<UsersPage>(
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
        const document = await this.client.query<UsersDocument>(
            query.Get(
                query.Ref(
                    query.Collection(this.collection),
                    id
                )
            )
        );

        return { ...document.data, id: document.ref.id };
    }

    async getByUsername(username: string) {
        try {
            const document = await this.client.query<UsersDocument>(
                query.Get(
                    query.Match(
                        query.Index("users_by_username"),
                        username
                    )
                )
            );

            return { ...document.data, id: document.ref.id };
        } catch (error) {
            if (error instanceof fauna.errors.NotFound) {
                return undefined;
            }

            throw error;
        }
    }

    async remove(id: string) {
        await this.client.query<UsersDocument>(
            query.Delete(
                query.Ref(query.Collection(this.collection), id)
            )
        );
    }

    async update(user: User) {
        const { id, ...data } = user;

        await this.client.query<UsersDocument>(
            query.Update(
                query.Ref(query.Collection(this.collection), id),
                { data }
            )
        );
    }
}
