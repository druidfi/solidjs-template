import { Component, lazy } from 'solid-js';
import { Routes, Route } from "@solidjs/router"

import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const RepositoriesPage = lazy(() => import("./pages/RepositoriesPage"));

const App: Component = () => {
  return (
    <div class="container mx-auto">
        <Header />
        <main>
            <Routes>
                <Route path="/" component={HomePage} />
                <Route path="/repositories" component={RepositoriesPage} />
            </Routes>
        </main>
    </div>
  );
};

export default App;
