import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({ title, onAdd, showAdd }) => {
   
    return ( <header className = 'header' >
        <h1> { title } </h1> <
        Button color={showAdd ? 'black' : 'blue'} 
        text = {showAdd ? 'Close' : 
        'Add'}
     onClick={onAdd}/>

        </header>  
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//  CSS in react
// const headingStyle = {
//     color: 'grey', backgroundColor: 'lightblue',
//     font: 'sans'
// }
export default Header

// an if statement
//{X ? 'YES' : 'No' }

