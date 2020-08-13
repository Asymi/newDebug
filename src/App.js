import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components';
import { Welcome, About, Search } from './pages';

function App() {
    return (
        <div id="app">
            <NavBar />
            <main>
                <Switch >
                    <Route exact path="/" component={Welcome} />
                    <Route path="/about" component={About} />
                    <Route path="/search" component={Search} />
                </Switch>
            </main>
        </div>
    )
}

export default App;