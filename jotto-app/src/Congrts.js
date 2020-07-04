import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for congrulation message
 * @function
 * @returns{JSX.Element} - Rendered Component (or null if `success` props)
 */

const Congrts = (props) =>{

    if(props.success){
        return(
            <div data-test="component-congrts">
                <span data-test="congrts-message">
                    Congratulation ! You Guessed The Right Word
                </span>
            </div>
        )
    }
    else{
        return(
            <div data-test="component-congrts" />
        )
    }
}
Congrts.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrts;