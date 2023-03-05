import { Component, lazy } from 'solid-js';
import { Routes, Route } from "@solidjs/router"

import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const SecondPage = lazy(() => import("./pages/SecondPage"));

const App: Component = () => {
  return (
    <div class="container mx-auto">
        <Header />
        <main>
            <Routes>
                <Route path="/" component={HomePage} />
                <Route path="/second" component={SecondPage} />
            </Routes>
        </main>
    </div>
  );
};

export default App;
