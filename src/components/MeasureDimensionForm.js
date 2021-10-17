import './MeasureDimensionForm.css';

const MeasureDimensionForm = (props) => {
    // const [inputDimension, setDimension] = useState('')
    // const [inputMeasure, setMeasure] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        //validate here the dimension and measure before calling the Api
        //if all is ok call the API and clear fields
        props.getData(props.inputMeas, props.inputDim)

    }

    return (
        <form>
            <div className='row'>
                <label className='label' >Dimension</label>
                <div id='dimInput' className='input'>
                {props.inputDim}
                
                </div>
                
      
            </div>
            <div className='row'>
                <label className='label'>Measure</label>
                <div id='measInput' className='input'>
                {props.inputMeas}
                
                </div>
          
            </div>
            <button className='button' onClick={onSubmit}>Generate Plot</button>
        </form>
    )
}

export default MeasureDimensionForm
