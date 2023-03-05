import { Component, For } from 'solid-js';
import { A } from "@solidjs/router"

const navItems = [
    { name: "Home", href: "/", end: true },
    { name: "Repositories", href: "/repositories", end: false },
]

const Header: Component = () => {
    return (
        <header class="bg-gray-100">
            <ul class="list-none ml-auto flex items-center pt-2 pb-2">
                <For each={navItems}>
                    {(item) => (
                        <li class="mr-2">
                            <A href={item.href} activeClass="text-red-500" inactiveClass="text-black" end={item.end}>{item.name}</A>
                        </li>
                    )}
                </For>
            </ul>
        </header>
    );
};

export default Header;
