import { useState } from "react"

const MeasureDimensionForm = ({getData}) => {
    const [dimension ,setDimension] = useState('')
    const [measure ,setMeasure] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()
        //validate here the dimension and measure before calling the Api
        //if all is ok call the API and clear fields
        getData(measure,dimension)
        setDimension('')
        setMeasure('')
        
    }
    return (
        <form>
            <div>
                <label>Dimension</label>
                <input type="text" placeholder="Enter a Dimension" 
                value={dimension} onChange={(e)=>setDimension(e.target.value)}></input>
            </div>
            <div>
                <label>Measure</label>
                <input type="text" placeholder="Enter a Measure"
                value={measure} onChange={(e)=>setMeasure(e.target.value)}></input>
            </div> 
            {/* <input className="btn btn-block" type="submit" value="Build Plot" onSubmit={onSubmit}/> */}
            <button onClick={onSubmit}>Build Plot</button>
        </form>
    )
}

export default MeasureDimensionForm
