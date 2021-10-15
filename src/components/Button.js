import PropTypes from 'prop-types'

const Button = ({color,text,getData}) => {
    
    const onClick = (e) => {
        e.preventDefault()
        getData('Cost','Product')
    }
    return <button 
    onClick = {onClick}
     style={{backgroundColor:color}} className='btn'>{text}</button>
}

Button.defaultProps ={
    color:'steelblue'
}

Button.protoTypes ={
    text:PropTypes.string.isRequired,
    color:PropTypes.string,
    onClick:PropTypes.func,
}
export default Button
