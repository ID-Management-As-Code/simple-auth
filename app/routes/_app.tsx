/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Head, asset } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href={asset("/images/favicon.ico")} />

                <link rel="stylesheet" href={asset("/styles/styles.css")} />
            </Head>

            <Component />
        </>
    );
}
