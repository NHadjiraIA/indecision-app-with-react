import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption.js';
import Action from './Action.js'
import Header from './Header.js';
import Options from './Options.js';
import OptionModal from './OptionModal';

export default  class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption : undefined
    }
    handlDeleteOptions = () => {
        this.setState(() => {
            return {
                options :[]
            };
        });
    };
    handlDeleteOption = (optionToRemove) => {
        this.setState((prevState) =>({
            options : prevState.options.filter((option) => {
              return optionToRemove !== option
            })
        }))
    };
    handlepick  = () => {
       const randNum = Math.floor(Math.random() * this.state.options.length);
       const option = this.state.options[randNum];
       this.setState(() =>({
        selectedOption: option 
    }))
    }
    handlAddOption = (option) => {
        if (!option){
            return ' Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1){
            return 'this option already exist'
        } 
        this.setState((prevState) =>{
          return{
              options : prevState.options.concat([option])
          }
        })
    };
    handlRemoveModal = () => {
        this.setState(() =>({
            selectedOption : undefined
        }))
    };
    componentDidMount() {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options) {
            this.setState(()=> ({options}));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options ', json)
            console.log(json)
            console.log("componentDidUpdate")
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
   
    render() {
        const title = "Indecision";
        const subTitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title1={title} subTitle1 = {subTitle}/>
                <div className='container'>
                <Action 
                hasOptions ={this.state.options.length > 0}
                handlepick = {this.handlepick}
                />
                <div className='widget'>
                <Options
                 optionsContent={this.state.options}
                 handlDeleteOptions = {this.handlDeleteOptions}
                 handlDeleteOption ={this.handlDeleteOption}
                 />
                <AddOption 
                handlAddOption = {this.handlAddOption}
                />
                </div>
                </div>
                <OptionModal 
                handlRemoveModal = {this.handlRemoveModal}
                selectedOption={this.state.selectedOption}
                />
            </div>
        )
    }
}


