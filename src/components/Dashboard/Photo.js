import React from 'react';


function Photo(props){

    return(
        <div className='photo'>
            <img src={props.name} />

        </div>

    )
}

export default Photo