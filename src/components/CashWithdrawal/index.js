import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    cashPrice: 2000,
  }

  onSumClickeach = value => {
    //  console.log(value)
    this.setState(preState => ({cashPrice: preState.cashPrice - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {cashPrice} = this.state

    const UserName = 'Sarah Williams'
    const letterSlice = UserName.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="user-container">
            <div className="image-container">
              <p className="profile-image">{letterSlice}</p>
            </div>
            <p className="description-name">{UserName}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance-description">Your Balance</p>
            <p className="balance-number">
              {cashPrice}
              <br />
              <span className="rupees-container">In Rupees</span>
            </p>
          </div>
          <p className="withdraw-description">Withdraw</p>
          <p className="sum-description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachPrice => (
              <DenominationItem
                onSumClickeach={this.onSumClickeach}
                eachSumPrice={eachPrice}
                key={eachPrice.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
