import './index.css'

const DenominationItem = props => {
  const {eachSumPrice, onSumClickeach} = props
  const {value} = eachSumPrice
  const onSumClcik = () => {
    onSumClickeach(value)
  }
  return (
    <li className="list-price">
      <button className="button-price" type="button" onClick={onSumClcik}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
