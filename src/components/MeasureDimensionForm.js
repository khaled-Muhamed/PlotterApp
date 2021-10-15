import { useState } from "react"


const MeasureDimensionForm = ({ getData }) => {
    const [inputDimension, setDimension] = useState('')
    const [inputMeasure, setMeasure] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        //validate here the dimension and measure before calling the Api
        //if all is ok call the API and clear fields
        getData(inputMeasure, inputDimension)
        // setDynamicDimension(data[0].values)
        // setDynamicMeasure(data[1].values)
        // this.dimension = data[0].values
        // this.measure = data[1].values
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
            {/* <input className="btn btn-block" type="submit" value="Build Plot" onSubmit={onSubmit}/> */}
            <button onClick={onSubmit}>Build Plot</button>
            {/* <Plot
                data={[
                    {
                        x: dimension,
                        y: measure,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    }
                    //,{ type: 'scatter', x: ['n', 'm', 'k'], y: [2.2, 6.2, 3.5], },
                ]}
                layout={{ width: 520, height: 440, title: 'Plot' }}
            /> */}
        </form>
    )
}

export default MeasureDimensionForm
