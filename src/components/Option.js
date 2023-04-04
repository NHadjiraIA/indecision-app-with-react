import React from 'react';
export default class Option extends React.Component {
    render(){
        return (
            <div className='option'>
                <p className='option__text'> {this.props.count} . { this.props.textOption}</p>
               <button 
               className='button button--link'
               onClick ={(e) => {
                   this.props.handlDeleteOption(this.props.textOption)
               }}
               > 
               remove </button>
            </div>
        )
    }
}