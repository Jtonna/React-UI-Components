import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = props => {
    // this is a Stateless component that recieves props.
    // Props (short for properties) in React are a set of data that can be transferred from 
    // a parent component to its child component and then can be used by a render() 
    // function to generate the view. The important thing to remember about props is that 
    // they are immutable. This means that the parent component can send whatever prop 
    // values he likes to a child component, but the child cannot modify them by itself.
    // https://reactjs.co/2015/08/17/how-does-react-props-work/

    return(
        <header className="header-container">
            <ImageThumbnail />
            <div>

            </div>
        </header>
    );
}

export default HeaderContainer;