import AddDimension from './AddDimension'
import AddMeasure from './AddMeasure'
import Button from './Button'

const MeasureDimensionForm = ({getData}) => {
    return (
        <div>
            <AddDimension />
            <AddMeasure />
            <Button color='green' text='Hello' getData = {getData}/>
        </div>
    )
}

export default MeasureDimensionForm
