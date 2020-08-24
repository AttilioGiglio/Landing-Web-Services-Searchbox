import React from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { Scroll } from './Scroll.js';
import ErrorBoundry from './ErrorBoundry.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            // robots: robots,
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }))
    };

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const { robots, searchField, } = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='box ph5 mb4 tc' >
                    <h1 className='ma2' style={{ fontSize: '80px' }}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}
export default App;