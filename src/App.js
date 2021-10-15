import SideBar from "./components/SideBar";
import { useState ,useEffect } from "react"
import column from "./components/Column";

function App() {

  //load columns on page load
  //---------------------------------------------------------------------------------
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
  //you 
  // const name  = "khaled"
  // const x = true
  const [columns, setColumns] = useState([])
const toggleReminder = (name) =>{
  console.log("Toggling " + name)
  // setColumns(columns.map((column) => column.name === name ? {...column.name ="toggled"}: column))
}

  return (
    <div className="App">
     <SideBar title={1} columns={columns} onToggle={toggleReminder}/>
    </div>
  );
}


export default App;
