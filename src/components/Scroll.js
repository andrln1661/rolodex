import React from 'react';

export const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height: '800px'}}>
            {props.children}
        </div>
    );
};