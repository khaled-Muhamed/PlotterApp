
import Column from "./Column"
const Columns = ({ columns }) => {
    return (
        <>
            {columns.length > 0 ? (
                columns.map((column, index) => (
                    <Column
                        key = {index}
                        column={column} > {column.name} </Column>))
            ) : ('No Coulmns to show')
            }
        </>
    )
}
export default Columns
