import React from 'react';
import Navigation from './containers/Navigation'
import './App.css'
import Router from './Router'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Navigation/>
                <Router/>
                }
            </Provider>
        </div>
    );
}
export default App;
