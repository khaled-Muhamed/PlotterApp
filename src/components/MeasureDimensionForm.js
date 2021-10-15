import { useState } from "react"


const MeasureDimensionForm = ({ getData }) => {
    const [inputDimension, setDimension] = useState('')
    const [inputMeasure, setMeasure] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        //validate here the dimension and measure before calling the Api
        //if all is ok call the API and clear fields
        getData(inputMeasure, inputDimension)

    }

    return (
        <form>
            <div>
                <label>Dimension</label>
                <input type="text" placeholder="Enter a Dimension"
                    value={inputDimension} onChange={(e) => setDimension(e.target.value)}></input>
            </div>
            <div>
                <label>Measure</label>
                <input type="text" placeholder="Enter a Measure"
                    value={inputMeasure} onChange={(e) => setMeasure(e.target.value)}></input>
            </div>
            <button onClick={onSubmit}>Generate Plot</button>
        </form>
    )
}

export default MeasureDimensionForm
