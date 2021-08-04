import React from 'react';
import {CardList} from './CardList';
import {SearchBox} from './SearchBox';
import {robots} from '../components/robots';
import '../styles/App.css';


const App = () => {
    return (
        <div className="main">
            <div className="header">
                <h1 id="title">RoboFriends</h1>
                <SearchBox />
            </div>
            
            <CardList robots={robots}/>
        </div>
        
    );
}

export default App;