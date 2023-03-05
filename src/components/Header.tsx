import { Component } from 'solid-js';
import { A } from "@solidjs/router"

const Header: Component = () => {
    return (
        <header class="bg-gray-100">
            <ul class="list-none ml-auto flex items-center pt-2 pb-2">
                <li class="mr-2">
                    <A href="/" activeClass="text-red-500" inactiveClass="text-black" end={true}>Home</A>
                </li>
                <li class="mr-2">
                    <A href="/repositories" activeClass="text-red-500" inactiveClass="text-black">Repositories</A>
                </li>
            </ul>
        </header>
    );
};

export default Header;
