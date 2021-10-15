
const column = ({key ,column }) => {
    return (
        <>
            <h3 >{column.name} {'('+column.function+')'}</h3>
        </>
    )
}

export default column
