import React from 'react';

const Header = (props) =>{
    return (
                    <div className='header'>
                        <div className='container'>
                        <h1 className='header__title'> {props.title1} </h1>
                        <h2 className='header__subtitle'>{props.subTitle1} </h2>
                
                        </div>
                         </div>
                )
}
export default Header;
Header.defaultProps = {
    title1: 'Indicision by default'
};
