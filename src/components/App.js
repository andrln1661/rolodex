import React from 'react';
import {CardList} from './CardList';
import {SearchBox} from './SearchBox';
import {robots} from '../components/robots';
import '../styles/App.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filterredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
                <div className="main">
                    <div className="header">
                        <h1 id="title">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    
                    <CardList robots={filterredRobots}/>
                </div>
                
            );

    }
}

export default App;
