import { React, useState } from 'react';
import MeasureDimensionForm from './MeasureDimensionForm';
import './Container.css';


const Container = props => {
  const [columns] = useState(props.columns)
  const [inputDim, setInputDim] = useState('');
  const [inputMeas, setInputMeas] = useState('');
  var columnname = '';
  var cols = [];


  const onDragStart = (event, columnName) => {
    console.log('dragstart on div: ', columnName);
    event.dataTransfer.setData("columnName", columnName);
    columnname = columnName;
  }

  const onDragOver = (event) => {
    event.preventDefault();
  }

  const onDrop = (event, columnName) => {
    //on drop put he dimension in dimension div or measure in measure form
    columns.filter((column) => {
      if (column.name === columnName) {
        if (column.function === 'dimension') {
          setInputDim(columnName);
        } else {
          setInputMeas(columnName);
        }
      }
      return 0;
    });
  }



  columns.forEach((column, index) => {
    cols.push(
      <div key={index}
        onDragStart={(event) => onDragStart(event, column.name)}
        draggable
        className="draggable"
      >
        {column.name}
      </div>
    );
  });


  return <div className='row'>

    <div
      className='side-bar'
      onDragOver={(event) => onDragOver(event)}
      onDrop={(event) => { onDrop(event, columnname) }}
    >
      {cols}
    </div>

    <div
      className='droppable'
      onDragOver={(event) => onDragOver(event)}
      onDrop={(event) => onDrop(event, columnname)}
    >

      <MeasureDimensionForm
        getData={props.getData}
        inputDim={inputDim}
        inputMeas={inputMeas}

      />
    </div>

  </div>
};
export default Container;