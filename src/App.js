import SideBar from "./components/SideBar";
import { useState, useEffect } from "react"
import MeasureDimensionForm from "./components/MeasureDimensionForm"
import Plot from 'react-plotly.js';

function App() {
  const [columns, setColumns] = useState([])
  const [dimension, setDynamicDimension] = useState([])
  const [measure, setDynamicMeasure] = useState([])
  const [dimensionTitle, setDimensionTitle] = useState('')
  const [measureTitle, setMeasureTitle] = useState('')

 var staticMeasures = []
 var staticDimensions = []

  //load columns on page load
  //---------------------------------------------------------------------------------
  useEffect(() => {
    const getColumns = async () => {
      const columnsFromAPI = await fetchColumns()
      setColumns(columnsFromAPI)
    }
    getColumns()
  },[])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  //Fetch columns from API
  const fetchColumns = async () => {
    const response = await fetch('https://plotter-task.herokuapp.com/columns')
    const data = await response.json()
    return data
  }
  //---------------------------------------------------------------------------------
  const setStaticDimensionsAndMeasures = () =>{
    columns.forEach((column) => {
        
      if (column.function === 'measure') {
        //it's a measure
        staticMeasures.push(column.name)
      }else {
        //it's a dimension
        staticDimensions.push(column.name)
      }
    })
  }
  //-----------------------------------------------------------------------------------

  //post to get the dimension and measure columns data values.
  const getDimensionMeasureData = async (measure, dimension) => {
    //first We need to validate if it's a true measure and dimension
    setStaticDimensionsAndMeasures();

    if (!validMeasure(measure)) {
      alert('please Enter valid measure')
      return ''

    } else if (!ValidDimension(dimension)) {
      alert('please Enter valid Dimension')
      return ''

    } else {
      const msgBody = `{"measures": ["${measure}"],"dimension": "${dimension}"}`
      const response = await fetch('https://plotter-task.herokuapp.com/data', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: msgBody
      })
      let data = await response.json()
      plotData(data)
    }
  }

  const plotData = (data) => {
    setDynamicDimension(data[0].values)
    setDimensionTitle(data[0].name)

    setDynamicMeasure(data[1].values)
    setMeasureTitle(data[1].name)
  }
  //---------------------------------------------------------------------------------
  //method to validate user input
  function validMeasure(measure) {
    return staticMeasures.includes(measure);
  }
  function ValidDimension(dimension) {
    return staticDimensions.includes(dimension);
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
        ]}
        layout={{
          width: 700,
          height: 700,
          title: 'Plot',
          xaxis: {
            title: dimensionTitle,
            titlefont: {
              family: 'Courier New, monospace',
              size: 18,
              color: '#7f7f7f'
            }
          }, yaxis: {
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
