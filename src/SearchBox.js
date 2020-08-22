import React from 'react';

const SearchBox = ({searchChange}) => {

    return (
        <div className='box ma4'>
            <input className='f3 pa3 b--dark-gray bg-light-gray' type='search' 
            placeholder='Search Robots'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;