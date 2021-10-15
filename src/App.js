import SideBar from "./components/SideBar";
import { useState } from "react"

function App() {
  // const name  = "khaled"
  // const x = true
  const [columns, setColumns] = useState(
    //write default value here
    [
        {
            name: 'Product',
            function: 'dimension'
        },
        {
            name: 'Year',
            function: 'dimension'
        },
        {
            name: 'Country',
            function: 'dimension'
        },
        {
            name: 'Cost',
            function: 'measure'
        },
        {
            name: 'Revenue',
            function: 'measure'
        },
        {
            name: 'UnitsSold',
            function: 'measure'
        }

    ]
)
  return (
    <div className="App">
     <SideBar title={1} columns={columns}/>
    </div>
  );
}


export default App;
