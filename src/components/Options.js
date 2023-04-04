import React from 'react';
import Option from './Option.js';

const Options = (props) => (
    <div>
        <div className='widget-header'> 
            <h3 className='widget-header--title'> Your Options </h3>   
            <button
            className='button button--link'
            onClick={props.handlDeleteOptions}
            > 
            Remove All 
            </button>
        </div>
        {props.optionsContent.length === 0 && <p className='widget__message'> Please add option to get started!</p>}
        {
        props.optionsContent.map((option, index) => 
        <Option
        key={option} 
        count={index + 1}
        textOption ={option}
        handlDeleteOption={props.handlDeleteOption}
        /> )
        } 
   </div>
)
export default  Options;