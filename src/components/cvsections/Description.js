import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let index = e.target.dataset.index;
    let targetValue = e.target.value;

    let newDescription = [...this.props.description];

    newDescription.splice(index, 1, targetValue);
    console.log(index, targetValue, newDescription);

    this.props.onChange(newDescription);
  }

  render() {

    let summary = [];
    if (this.props.description.length !== 0) {

      if (this.props.isEditOn) {

        // Display info as input fields
        this.props.description.forEach((line, index) => {
          summary.push(
            <li key={this.props.jobId + index}>
              <textarea
                value={line ? line : ''}
                placeholder='Summary of Achievements'
                onChange={this.handleChange}
                data-index={index}>
              </textarea>
            </li>
          );
        });

      } else {

        // Display info as text
        this.props.description.forEach((line, index) => {
          summary.push(
            <li key={this.props.jobId + index}>
              {line ? line : 'Summary of Achievements'}
            </li>
          );
        });

      }
    }

    return(
      <ul>
        {summary}
      </ul>
    )
  }
}

export default Description
