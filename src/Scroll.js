import React from 'react';

export const Scroll = (props) => {
    return (
        <div style={{overflowY:'scroll', border:'1px solid purple', height:'750px'}}>
            {props.children}
        </div>
    );
}
