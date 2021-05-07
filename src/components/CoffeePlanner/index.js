import {Component} from 'react'

import './index.css'

import PlannerQuestion from '../CoffeePlannerQuestion'

let listChoices = {}
let choiceHeadings = {}

class CoffeePlanner extends Component {
  state = {
    checkAllChoices: '',
  }

  componentWillUnmount() {
    listChoices = {}
    choiceHeadings = {}
    this.setState({checkAllChoices: ''})
  }

  output = () => {
    const {coffeePlannerData} = this.props
    const dataLength = coffeePlannerData.length
    const choosedLength = Object.keys(listChoices).length
    if (dataLength === choosedLength) {
      return this.setState({checkAllChoices: true})
    }
    return this.setState({checkAllChoices: false})
  }

  checkId = (curentid, id, optionTitle) => {
    listChoices[id] = curentid
    choiceHeadings[id] = optionTitle
  }

  errorBox = () => {
    const {checkAllChoices} = this.state

    if (checkAllChoices === true) {
      return (
        <div className="plan-box">
          <p>
            I Drink my coffee as{' '}
            <span className="planned-text"> {choiceHeadings[0]}</span>, with a{' '}
            <span className="planned-text"> {choiceHeadings[1]}</span> type of
            bean.
            <span className="planned-text"> {choiceHeadings[2]}</span> ground
            ala
            <span className="planned-text"> {choiceHeadings[3]}</span> , sent to
            me
            <span className="planned-text"> {choiceHeadings[4]}</span>.
          </p>
        </div>
      )
    }
    if (checkAllChoices === false) {
      return (
        <div className="plan-box">
          <p>Kindly select options for all the questions.</p>
        </div>
      )
    }
    return ''
  }

  render() {
    const {coffeePlannerData} = this.props

    return (
      <div className="bg">
        <div className="header-container">
          <div className="header-container-content{">
            <h1 className="header-container-heading">Create a Plan</h1>
            <p className="header-container-description">
              We offer an assortment of the best artesian coffees from the globe
              delivered fresh to the doo create your plan with this.
            </p>
          </div>
        </div>
        <ul className="questions-container">
          {coffeePlannerData.map(eachData => (
            <PlannerQuestion
              Question={eachData}
              key={eachData.id}
              checkId={this.checkId}
            />
          ))}
        </ul>
        <button className="create-button" type="button" onClick={this.output}>
          Create my plan!
        </button>
        {this.errorBox()}
      </div>
    )
  }
}

export default CoffeePlanner
