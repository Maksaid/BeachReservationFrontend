import React from 'react';
import './FilterArea.css'
import './SearchButton.css'
import CityFilter from './CityFilter'
import CountryFilter from './CountryFilter'
import SubmitButton from './SearchButton'

const FilterArea = () =>{
return(
    <div className="filter-container">
        <CountryFilter className='filter'/>
        <CityFilter className='filter'/>
        <SubmitButton className='search-button'/>
    </div>
);
};
export default FilterArea;
