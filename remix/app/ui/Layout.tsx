import { PropsWithChildren } from 'react';
import { faRightToBracket } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useMatches } from 'remix';
import { Logo } from './Logo';

type Properties = PropsWithChildren<{}>;

const hiddenOnPaths = [
    '/auth/signin'
];

export function isFooterVisible(paths: string[]) {
    for (const path of hiddenOnPaths) {
        if (paths.includes(path)) return false;
    }

    return true;
}

export function isNavigationVisible(paths: string[]) {
    for (const path of hiddenOnPaths) {
        if (paths.includes(path)) return false;
    }

    return true;
}

export const Layout = ({ children }: Properties) => {
    const matches = useMatches();
    const paths = matches.map(match => match.pathname);

    const showFooter = isFooterVisible(paths);
    const showNavigation = isNavigationVisible(paths);

    return (
        <div className="flex flex-col" id="root">
            {showNavigation && (
                <nav className="bg-slate-100 border-b border-slate-300 py-4">
                    <ul className="container flex items-center">
                        <li>
                            <Link to="/">
                                <Logo />
                            </Link>
                        </li>
                        <li className="ml-auto">
                            <Link to="/auth/signin" className="">
                                <FontAwesomeIcon icon={faRightToBracket} size="2x" className="text-indigo-500" />

                                <span className="sr-only">Sign in</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}

            <main className="flex flex-col flex-grow">
                {children}
            </main>

            {showFooter && (
                <footer className="mt-auto bg-slate-100 border-t border-slate-300 py-4">
                    <div className="container">
                        &copy; Blacky Wolf. Released under <a
                            href="https://github.com/ID-Management-As-Code/simple-auth/blob/principis/LICENSE"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="link"
                        >
                            MIT License
                        </a>.
                    </div>
                </footer>
            )}
        </div>
    );
}
