import { createMutable } from "solid-js/store";
import { Repository } from "./repository";

export const favorites = createMutable({
    repositories: JSON.parse(
        window.localStorage.getItem("favorites") ?? "[]"
    ) as Repository[],
    get count() {
        return this.repositories.length;
    },
    addFavorite(repository: Repository) {
        this.repositories.push(repository);
        window.localStorage.setItem("favorites", JSON.stringify(this.repositories));
    },
    clear() {
        this.repositories = [];
        window.localStorage.setItem("favorites", JSON.stringify(this.repositories));
    },
});
