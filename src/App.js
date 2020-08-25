import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from './Actions.js';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { Scroll } from './Scroll.js';
import ErrorBoundry from './ErrorBoundry.js';



const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
            onRequestRobots: () => dispatch(requestRobots())
        });
}

class App extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         // robots: robots,
    //         robots: [],
    //         // searchField: ''
    //     };
    // }

    componentDidMount() {
        // console.log(this.props.store.getState())
        // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ robots: users }))
        this.props.onRequestRobots();
    };

    // onSearchChange = (event) => {
    //     this.setState({ searchField: event.target.value });
    // }

    render() {
        // const { robots, /*searchField*/ } = this.state;
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
        // return !robots.length ?
        return  isPending ?
            <h1>Loading</h1> :
            (
                <div className='box ph5 mb4 tc' >
                    <h1 className='ma2' style={{ fontSize: '80px' }}>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;