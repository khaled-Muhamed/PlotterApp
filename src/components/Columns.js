
import Column from "./Column"
const Columns = ({ columns ,onToggle}) => {
    return (
        <>
            { columns.length > 0 ? (
                 columns.map((column,index) => (<Column key = {index} column={column} onToggle={onToggle}>{column.name} </Column>))
            ) : ( 'No Coulmns to show') 
                }
        </>
    )
}

export default Columns
