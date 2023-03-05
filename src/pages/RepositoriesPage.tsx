import { Component, For } from 'solid-js';

import { repositories } from "../github";
import { favorites } from "../favorites";
import { Repository } from "../repository";

const RepositoriesPage: Component = () => {
    return (
        <>
            <h1>Repositories</h1>
            <ul>
                <For each={repositories()}>
                    {(repo :Repository) => (
                        <li class="mb-2">
                            <a href={repo.html_url} class="text-white underline">{repo.full_name}</a>
                            <a onClick={(evt) => {
                                evt.preventDefault();
                                favorites.addFavorite(repo);
                            }}>⭐</a>
                            <p>{repo.description}</p>
                        </li>
                    )}
                </For>
            </ul>
        </>
    );
};

export default RepositoriesPage;
