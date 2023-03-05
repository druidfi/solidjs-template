import { Component, For } from 'solid-js';
import { repositories } from "../github";
import { Repository } from "../repository";

const SecondPage: Component = () => {
    return (
        <>
            <h1>Second Page</h1>
            <ul>
                <For each={repositories()}>
                    {(repo :Repository) => (
                        <li class="mb-2">
                            <a href={repo.html_url} class="text-white underline">{repo.full_name}</a>
                            <p>{repo.description}</p>
                        </li>
                    )}
                </For>
            </ul>
        </>
    );
};

export default SecondPage;
