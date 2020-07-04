import React from 'react';

/**
 * Functional React component for congrulation message
 * @function
 * @returns{JSX.Element} - Rendered Component (or null if `success` props)
 */

export default (props) =>{

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