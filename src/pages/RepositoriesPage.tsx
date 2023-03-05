import { Component, For } from 'solid-js';

import { repositories } from "../github";
import { favorites } from "../favorites";
import { Repository } from "../repository";
import LoadingSpinner from "../components/LoadingSpinner"

function RepositoryItem(props: { repo: Repository; }) {
    return (
        <>
            <a href={props.repo.html_url} target="_blank">{props.repo.full_name}</a>
            {favorites.is(props.repo) && <span>⭐</span>}
            {!favorites.is(props.repo) &&
                <>
                    <span> - </span>
                    <a onClick={(e) => {e.preventDefault();favorites.addFavorite(props.repo);}}>Add to favorites</a>
                </>
            }
            <p>{props.repo.description}</p>
        </>
    )
}

const RepositoriesPage: Component = () => {
    return (
        <>
            <h1>Repositories</h1>
            <ul>
                <For each={repositories()} fallback={<LoadingSpinner />}>
                    {(repo :Repository) => (
                        <li class="mb-2">
                            <RepositoryItem repo={repo} />
                        </li>
                    )}
                </For>
            </ul>
        </>
    );
};

export default RepositoriesPage;
