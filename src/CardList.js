import React from 'react';
import Card from './Card.js';

const CardList = ({ robots }) => {

    return (
        /* const cardComponent = */
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                            website={robots[i].website}
                        />
                    );
                })
            }
        </div>
    );
}

//     return (
//         <div className='box'>
//             {cardComponent}
//         </div>
//     )


export default CardList;