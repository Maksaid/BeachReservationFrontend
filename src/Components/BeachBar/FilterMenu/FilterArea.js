import React from 'react';
import './FilterArea.css'
import './SearchButton.css'
import CountryFilter from './CountryFilter'
import SubmitButton from './SearchButton'


const FilterArea = () =>{
return(
    <div className="filter-area">
        <CountryFilter className='filter'/>
        <div className="filter">
            <label htmlFor="scoreFilter">Average Score:</label>
            <input type="number" id="scoreFilter" min="0" max="10" />
        </div>
        <div className="filter">
            <label htmlFor="searchFilter">Search:</label>
            <input className="input" type="text" id="searchFilter" />
        </div>
        <SubmitButton className='search-button'/>
    </div>
);
};
export default FilterArea;
