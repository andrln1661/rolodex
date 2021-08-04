import React from 'react';
import {Card} from '../components/Card'
import '../styles/CardList.css';

export const CardList = ({robots}) => {
    const cardComponent = robots.map((user, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div className="container">
            {cardComponent}
        </div>
    )
} 
