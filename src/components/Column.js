
const column = ({key ,column , onToggle}) => {
    return (
        <>
            <h3 onDoubleClick={onToggle(column.name)} >{column.name}</h3>
        </>
    )
}

export default column
