import { faLockKeyhole } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren } from 'react';
import { Link } from 'remix';
import { Logo } from './Logo';

type Properties = PropsWithChildren<{}>;

export const Layout = ({ children }: Properties) => {
    return (
        <div className="flex flex-col" id="root">
            <nav className="bg-slate-100 border-b border-slate-300 py-4">
                <ul className="container">
                    <li>
                        <Link to="/">
                            <Logo />
                        </Link>
                    </li>
                </ul>
            </nav>

            <main>
                {children}
            </main>

            <footer className="mt-auto bg-slate-300 border-t border-slate-400 py-4">
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
        </div>
    );
}
