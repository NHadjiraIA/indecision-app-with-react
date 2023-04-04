import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error : undefined
    }
    
    handlAddOption = (e) =>{
        e.preventDefault();
        const optionIput = e.target.elements.option.value.trim();
        const error = this.props.handlAddOption(optionIput);
        this.setState (() => {
            return { error };
        })
        if (!error){
         e.target.elements.option.value = ' ';
        }
    }
    render() {
        return (
            <div className='add-option-error'>
                  {this.state.error && <p>{this.state.error}</p>}
               <form className='add-option' onSubmit={this.handlAddOption}>
                 <input className='add-option__input' type="text" name="option"/>
                 <button className='button'> Add Option</button>
               </form>
            </div>
        )
    }
}
 