import {Component} from 'react'

import './index.css'

import Option from '../QuestionOption'

class PlannerQuestion extends Component {
  state = {
    current: '',
  }

  currentChoice = (currentid, optionTitle) => {
    const {Question, checkId} = this.props
    const {id} = Question
    checkId(currentid, id, optionTitle)
    this.setState({current: currentid})
  }

  render() {
    const {Question} = this.props
    const {optionsData, questionTitle} = Question
    const {current} = this.state
    return (
      <div className="question-container">
        <h1 className="question-heading">{questionTitle}</h1>
        <ul className="choices-container">
          {optionsData.map(option => (
            <Option
              Data={option}
              key={option.id}
              currentChoice={this.currentChoice}
              currentId={current}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default PlannerQuestion
