import SideBar from "./components/SideBar";
import { useState ,useEffect } from "react"
import MeasureDimensionForm from "./components/MeasureDimensionForm"
function App() {

  //load columns on page load
  //---------------------------------------------------------------------------------
  const [columns, setColumns] = useState([])

  useEffect ( () => {
    const getColumns = async () =>{
      const columnsFromAPI = await fetchColumns()
      setColumns(columnsFromAPI)
    }
    getColumns()

  },[])

  //Fetch columns from API
  const fetchColumns = async () =>{
    const response = await fetch('https://plotter-task.herokuapp.com/columns')
    const data = await response.json()
    return data
  }
//---------------------------------------------------------------------------------
//post to get the dimension and measure columns data values.
const getDimensionMeasureData = async (measure,dimension) =>{
  const msgBody = `{"measures": ["${measure}"],"dimension": "${dimension}"}`
  const response = await fetch('https://plotter-task.herokuapp.com/data',{
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: msgBody
    })
    const data = await response.json()

console.log(data)
}
//---------------------------------------------------------------------------------

const toggleReminder = (name) =>{
  console.log("Toggling " + name)
  // setColumns(columns.map((column) => column.name === name ? {...column.name ="toggled"}: column))
}

  return (
    <div className="App">
     <SideBar columns={columns}/>
     <MeasureDimensionForm getData = {getDimensionMeasureData}/>
    </div>
  );
}


export default App;
