import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from 'remix';
import type { LinksFunction, MetaFunction } from 'remix';
import { Layout } from './ui';
import styles from './styles/main.css';

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: styles }
    ];
};

export const meta: MetaFunction = () => {
    return { title: 'SimpleAuth' };
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />

                <Links />
            </head>
            <body>
                <Layout>
                    <Outlet />
                </Layout>

                <ScrollRestoration />

                <Scripts />

                <LiveReload />
            </body>
        </html>
    );
}