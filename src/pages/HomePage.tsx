import { Component, For } from 'solid-js';
import { A } from "@solidjs/router"

import { favorites } from "../favorites"
import {Repository} from "../repository";

function Favorite(props: { repo: Repository; }) {
    return (
        <>
            <a href={props.repo.html_url} target="_blank">{props.repo.full_name}</a>
            <p>{props.repo.description}</p>
        </>
    )
}

const HomePage: Component = () => {
    return (
        <>
            <h1>Home</h1>
            <p>Lorem ipsum</p>
            <h2>My favorites</h2>
            {favorites.count &&
                <>
                    <ul>
                        <For each={favorites.repositories}>
                            {(repo :Repository) => (
                                <li class="mb-2">
                                    <Favorite repo={repo} />
                                </li>
                            )}
                        </For>
                    </ul>
                    <p>
                        <button onClick={(e) => {e.preventDefault();favorites.clear();}}>Clear all favorites</button>
                    </p>
                </>
            }
            {!favorites.count && <p>No favorites yet. You can add favorites from <A href="/repositories">Repositories</A> page</p>}
        </>
    );
};

export default HomePage;
