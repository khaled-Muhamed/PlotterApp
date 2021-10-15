import SideBar from "./components/SideBar";
import { useState, useEffect } from "react"
import MeasureDimensionForm from "./components/MeasureDimensionForm"
import Plot from 'react-plotly.js';

function App() {

  //load columns on page load
  //---------------------------------------------------------------------------------
  const [columns, setColumns] = useState([])

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
    const data = await response.json()

    var myObject = JSON.parse(data);
    console.log(myObject)
  }
  //---------------------------------------------------------------------------------
  const plotData = (dimensionValues, measureValues) => {
    return (
      <Plot
        data={[
          {
            x: ['n', 'm', 'k'],
            y: [2.2, 6.2, 3.5],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
          { type: 'scatter', x: ['n', 'm', 'k'], y: [2.2, 6.2, 3.5], },
        ]}
        layout={{ width: 520, height: 440, title: 'Plot' }}
      />
    );

  }

  //---------------------------------------------------------------------------------
  const toggleReminder = (name) => {
    console.log("Toggling " + name)
    // setColumns(columns.map((column) => column.name === name ? {...column.name ="toggled"}: column))
  }

  return (
    <div className="App">
      <SideBar columns={columns} />
      <MeasureDimensionForm getData={getDimensionMeasureData} />


    </div>
  );
}


export default App;
