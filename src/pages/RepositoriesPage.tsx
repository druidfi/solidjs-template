import {Component, createResource, For} from 'solid-js';

import { favorites } from "../favorites";
import { Repository } from "../repository";
import LoadingSpinner from "../components/LoadingSpinner"

export const [repositories] = createResource<Repository[]>(
    () => fetch("https://api.github.com/orgs/druidfi/repos")
        .then((res) => res.json()).catch(error => console.error(error)),
    {
        initialValue: [],
    }
);

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
                <For each={repositories().sort((a, b) => a.full_name > b.full_name ? 1 : -1)} fallback={<LoadingSpinner />}>
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
