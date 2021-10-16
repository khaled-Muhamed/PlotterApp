import PropTypes from 'prop-types'
import Columns from './Columns'

const SideBar = ({columns}) => {

    //Here I am going to allow dragging and dropping in side Bar
    //---------------------------------------------------------
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

export default SideBar
