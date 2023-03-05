import { createResource } from "solid-js";

import { Repository } from "./repository";

export const [repositories] = createResource<Repository[]>(
    () => fetch("https://api.github.com/orgs/druidfi/repos")
        .then((res) => res.json()).catch(error => console.error(error)),
    {
        initialValue: [],
    }
);
