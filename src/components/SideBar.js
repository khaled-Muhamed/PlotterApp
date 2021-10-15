import PropTypes from 'prop-types'
import Button from './Button'

import Columns from './Columns'

const SideBar = ({title , columns, onToggle}) => {
    const onClick = () =>{
        console.log('Cilck') 
     }

    return (
        <header>
            {/* <h1 style={sideBarStyle}> Hello {title} </h1> */}
            <h1 > Hello {title} </h1>
            <Button color='green' text='Hello' onClick={onClick}/>
            <Columns columns={columns} onToggle = {onToggle}/>
        </header>
    )
}
SideBar.defaultProps = {
    title: 'No columns to show',
}

SideBar.protoTypes = {
    //de 3lshan attributes ykon lehm type lw b3t msln number ykon error
    title : PropTypes.string.isRequired,
}

// const sideBarStyle = {
//     color:'red',
//     backgroundColor: 'blue',
// }
export default SideBar
