import PropTypes from 'prop-types'


import Columns from './Columns'

const SideBar = ({columns, getData}) => {
    const onClick = () =>{
        console.log('Cilck') 
     }

    return (
        <header>
            <Columns columns={columns}/>
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
