import { createResource } from "solid-js";
import { createMutable } from "solid-js/store";
import { Repository } from "./repository";

export const github = createMutable({
    repositories: [] as Repository[],
    get count() {
        return this.repositories.length;
    },
    clear() {
        this.repositories = [];
    },
});

export const [repositories] = createResource<Repository[]>(
    () => fetch("https://api.github.com/orgs/druidfi/repos")
        .then((res) => res.json()).catch(error => console.error(error)),
    {
        initialValue: [],
    }
);
