import React from 'react';
import '../styles/SearchBox.css';

export const SearchBox =  ({searchfield, searchChange}) => {
        return (
            <div>
                <input 
                type="search" 
                placeholder="Search Robots"
                onChange={searchChange}
                />
            </div>
        )    
}