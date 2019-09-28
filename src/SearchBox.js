import React from 'react';
// import SearchBox from './SearchBox';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div>
        <input 
        className= 'pa3 ba b--green bg-light-green bg-lightest-blue'
        type='search' 
        placeholder='search robots' 
        onChange = {searchChange}
        />
    </div>
    );
}

export default SearchBox;