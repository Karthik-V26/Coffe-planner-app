import {Component} from 'react'

import './index.css'

class Option extends Component {
  selected = () => {
    const {Data, currentChoice} = this.props
    const {id, optionTitle} = Data
    currentChoice(id, optionTitle)
  }

  render() {
    const {Data, currentId} = this.props
    const {id, optionTitle, description} = Data
    const selectedChoice = currentId
    const optionContainer =
      selectedChoice === id ? 'selected-option-container' : 'option-container'
    const weightHeading =
      selectedChoice === id ? 'selected-weight-heading' : 'weight-heading'
    const image =
      selectedChoice === id
        ? 'https://assets.ccbp.in/frontend/react-js/coffee-planner-white-cup-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/coffee-planner-blue-cup-img.png'
    const typeDescription =
      selectedChoice === id ? 'selected-type-description' : 'type-description'
    return (
      <div
        className={optionContainer}
        onClick={this.selected}
        role="menuitem"
        tabIndex={0}
      >
        <div className="weight-image-container">
          <h1 className={weightHeading}>{optionTitle}</h1>
          <img alt="cup" src={image} className="icon" />
        </div>
        <p className={typeDescription}>{description}</p>
      </div>
    )
  }
}

export default Option
