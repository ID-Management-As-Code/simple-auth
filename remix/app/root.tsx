import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from 'remix';
import type { LinksFunction, MetaFunction } from 'remix';

import styles from './styles/main.css';
import { Layout } from './ui';
import { LayoutConfiguration, LayoutProvider } from './providers';
import { useState } from 'react';

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: styles }
    ];
};

export const meta: MetaFunction = () => {
    return { title: 'SimpleAuth' };
};

export default function App() {
    const [showFooter, setShowFooter] = useState(true);
    const [showNavigation, setShowNavigation] = useState(true);

    let layoutConfiguration: LayoutConfiguration = {
        reset() {
            setShowFooter(true);
            setShowNavigation(true);

            console.log(this);
        },
        setShowFooter,
        setShowNavigation,
        showFooter,
        showNavigation
    };

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <Meta />

                <Links />
            </head>
            <body>
                <LayoutProvider configuration={layoutConfiguration}>
                    <Layout>
                        <Outlet />
                    </Layout>
                </LayoutProvider>

                <ScrollRestoration />

                <Scripts />

                <LiveReload />
            </body>
        </html>
    );
}
