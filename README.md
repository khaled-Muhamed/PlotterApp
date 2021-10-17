# Plotter-Challenge
## Project Title [Plotter-Task]

This is  a frontend app, so that the customers can discover all the columns available in a datasource. And based on their business
need, draw a line-chart of a measure in correspondence to a dimension. The measure values are represented on the Y-Axis of the chart, and the
dimension values are represented on the X-Axis of the chart

Clients are able to specify:
* drag a Dimension in dimension box.
* drag a Measure in measure box.

## Technical Decisions:
* I decided to add a button to generate the plot:
  - reason: make the application more robust as it won't build the plot untill client click on button.

## Example
check Sample Example snippets.

## Possible future improvements.
* Handle more Exceptions from API

## Prerequisites
* Browser
* react installed

## Important Files

 * src/components/MeasureDimensionForm.js: form to allow client drag and drop iside.
 * MeasureDimensionForm.css: style for MeasureDimensionForm.
 * src/components/Container.js: container that contain columns sideBar and generating plot form.
 * Container.css :style for Container.
 * src/components/Columns.js: form for coulumns getched from API.
 * src/components/ColumnForm.js: form for building plot.
 * src/components/Column.js: component for each column.
 

## References 
 *  https://plotly.com/javascript/react/
 *  https://stackoverflow.com/questions/37533929/how-to-return-data-from-promise
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 *  https://github.com/bradtraversy/react-crash-2021
 *  https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
 * https://www.youtube.com/watch?v=w7ejDZ8SWv8
 
## Authors
 Khaled Mohamed Abdelghany
