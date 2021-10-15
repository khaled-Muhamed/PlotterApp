//if we leave columns here then it is not part of our state so move it to 
// const columns = [
//     {
//         name: 'Product',
//         function: 'dimension'
//         },
//         {
//         name: 'Year',
//         function: 'dimension'
//         },
//         {
//         name: 'Country',
//         function: 'dimension'
//         },
//         {
//         name: 'Cost',
//         function: 'measure'
//         },
//         {
//         name: 'Revenue',
//         function: 'measure'
//         },
//         {
//         name: 'UnitsSold',
//         function: 'measure'
//         }
// ]

const Columns = ({ columns }) => {
    return (
        <>
            {columns.map((column) => (<h3>{column.name} </h3>))}
        </>
    )
}

export default Columns
