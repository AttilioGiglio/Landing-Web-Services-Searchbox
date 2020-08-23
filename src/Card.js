import React from 'react';
import './Card.scss'

const Card = (props) => {
    
    const {id,name,email,website} = props;

    return (

        <div className='card bg-light-purple dib pa3 br3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?set=set5`} alt="robots" />
            <h2 className="card-title m-2">{name}</h2>
            <p className="card-text f4 mb-2">{email}</p>
            <p className="card-text f4 mb-2">{website}</p>
        </div>
        
        // <div className='container'>
        //     <div className='row'>
        //         <div className='col-md-6 d-flex justify-content-center'>
        //             <div className="card ">
        //                 <img className="card-img-top" src="https://robohash.org/testing0?set=set5" alt="robots" />
        //                 <div className="card-body">
        //                     <h5 className="card-title">Jane Doe</h5>
        //                     <p className="card-text">jane.doe@gmail.com</p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='col-md-6 d-flex justify-content-center'>
        //             <div className="card">
        //                 <img className="card-img-top" src="https://robohash.org/testing1?set=set5" alt="robots" />
        //                 <div className="card-body">
        //                     <h5 className="card-title">Jane Doe</h5>
        //                     <p className="card-text">jane.doe@gmail.com</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}

export default Card;