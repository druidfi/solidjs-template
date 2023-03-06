import { createMutable } from "solid-js/store";
import { Repository } from "./repository";

export const favorites = createMutable({
    repositories: JSON.parse(
        window.localStorage.getItem("favorites") ?? "[]"
    ) as Repository[],
    get count() {
        return this.repositories.length;
    },
    getList() {
        return this.repositories.sort((a, b) => a.full_name > b.full_name ? 1 : -1);
    },
    addFavorite(repository: Repository) {
        this.repositories.push(repository);
        window.localStorage.setItem("favorites", JSON.stringify(this.repositories));
    },
    clear() {
        this.repositories = [];
        window.localStorage.setItem("favorites", JSON.stringify(this.repositories));
    },
    is(repository: Repository) {
        return this.repositories.some(favorite => favorite.id === repository.id);
    }
});
