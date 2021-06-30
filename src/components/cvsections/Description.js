import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: this.props.info,
      jobId: this.props.jobId
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let index = e.target.dataset.index;
    let targetValue = e.target.value;

    let newDescription = [...this.state.description];

    newDescription.splice(index, 1, targetValue);

    this.setState({
      description: newDescription
    });

    this.props.onChange(this.state.description);
  }

  render() {

    let summary = [];
    if (this.state.description.length !== 0) {

      if (this.props.isEditOn) {

        // Display info as input fields
        this.state.description.forEach((line, index) => {
          summary.push(
            <li key={this.state.jobId + index}>
              <textarea
                value={line}
                onChange={this.handleChange}
                data-index={index}>
              </textarea>
            </li>
          );
        });

      } else {

        // Display info as text
        this.state.description.forEach((line, index) => {
          summary.push(<li key={this.state.jobId + index}>{line}</li>);
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
