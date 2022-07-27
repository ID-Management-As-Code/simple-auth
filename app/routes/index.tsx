/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { HandlerContext, Handlers, PageProps, } from "$fresh/server.ts";
import { getUserData, UserData } from "@utilities/session.ts";

interface Data {
    user?: UserData;
}

export const handler: Handlers = {
    GET(request: Request, context: HandlerContext<Data>) {
        const user = getUserData(request);

        return context.render({ user });
    }
};

export default function Home({ data }: PageProps<Data>) {
    return (
        <>
            <h1>Home</h1>

            <p>User: {data?.user?.username || "-"}</p>
        </>
    );
}
