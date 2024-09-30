import { Link } from "@inertiajs/react";
import React from "react";

export const Layout = ({children }) => {
    return (
        <>
            <header>
                <nav>
                    <Link className="nav-link" href="/">Home</Link>
                    <Link className="nav-link" href="/create">Create</Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
};
