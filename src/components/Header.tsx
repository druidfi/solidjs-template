import type { Component } from 'solid-js';
import { A } from "@solidjs/router"

const Header: Component = () => {
    return (
        <header>
            <li>
                <A href="/">Home</A>
            </li>
            <li>
                <A href="/second">Second Page</A>
            </li>
        </header>
    );
};

export default Header;
