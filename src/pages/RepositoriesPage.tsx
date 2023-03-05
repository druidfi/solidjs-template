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
                            <a href={repo.html_url}>{repo.full_name}</a>
                            {favorites.is(repo) && <span>⭐</span>}
                            {!favorites.is(repo) &&
                                <>
                                    <span> - </span>
                                    <a onClick={(e) => {e.preventDefault();favorites.addFavorite(repo);}}>Add to favorites</a>
                                </>
                            }
                            <p>{repo.description}</p>
                        </li>
                    )}
                </For>
            </ul>
        </>
    );
};

export default RepositoriesPage;
