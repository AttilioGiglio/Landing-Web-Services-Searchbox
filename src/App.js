import React from 'react';
import CardList from './CardList.js';
import {Robots} from './Robots.js'
// import SearchBox from 'SearchBox.js'

const App = () => {

    return(
        <div className='container'>
            <h1>RoboFriends</h1>
            {/* <SearchBox /> */}
            <CardList robots={Robots} />
        </div>
    );
}

export default App;