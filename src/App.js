import React from 'react';
import CardList from './CardList.js';
import { robots } from './Robots.js'
import SearchBox from './SearchBox.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        };
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            < div className='box ph5 mb4 tc' >
                <h1 className='ma2' style={{ fontSize: '80px' }}>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}
export default App;