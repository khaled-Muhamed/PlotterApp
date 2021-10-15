import SideBar from "./components/SideBar";
import { useState, useEffect } from "react"
import MeasureDimensionForm from "./components/MeasureDimensionForm"
import Plot from 'react-plotly.js';

function App() {
  const [columns, setColumns] = useState([])
  const [dimension, setDynamicDimension] = useState([])
  const [measure , setDynamicMeasure] = useState([])

  const [dimensionTitle, setDimensionTitle] = useState('')
  const [measureTitle , setMeasureTitle] = useState('')

  //load columns on page load
  //---------------------------------------------------------------------------------
  useEffect(() => {
    const getColumns = async () => {
      const columnsFromAPI = await fetchColumns()
      setColumns(columnsFromAPI)
    }
    getColumns()

  }, [])

  //Fetch columns from API
  const fetchColumns = async () => {
    const response = await fetch('https://plotter-task.herokuapp.com/columns')
    const data = await response.json()
    return data
  }
  //---------------------------------------------------------------------------------

  //post to get the dimension and measure columns data values.
  const getDimensionMeasureData = async (measure, dimension) => {
    const msgBody = `{"measures": ["${measure}"],"dimension": "${dimension}"}`
    const response = await fetch('https://plotter-task.herokuapp.com/data', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: msgBody
    })
    let data = await response.json()
    // plotData(data[0].values,data[1].values)
    plotData(data)
  }
 
  // const plotData = (dimension , measure) =>{
    const plotData = (data) =>{
    setDynamicDimension(data[0].values)
    setDimensionTitle(data[0].name)

    setDynamicMeasure(data[1].values)
    setMeasureTitle(data[1].name)
    

  }  
   //---------------------------------------------------------------------------------

  return (
    <div className="App">
      <SideBar columns={columns} />
      <MeasureDimensionForm getData={getDimensionMeasureData} />
      <Plot
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
                layout={{ width: 700,
                   height: 700,
                    title: 'Plot',
                    xaxis: {
                      title: dimensionTitle,
                      titlefont: {
                          family: 'Courier New, monospace',
                          size: 18,
                          color: '#7f7f7f'
                      }
                   },yaxis: {
                    title: measureTitle,
                    titlefont: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                     }
                }
               }}
            />

    </div>
  );
}


export default App;
