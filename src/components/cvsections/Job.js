import React, { Component } from 'react';
import Description from './Description';

class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {
        title: this.props.info.title,
        yearStart: this.props.info.yearStart,
        yearEnd: this.props.info.yearEnd,
        currentlyWorking: this.props.info.currentlyWorking,
        companyName: this.props.info.companyName,
        description: this.props.info.description,
        id: this.props.info.id
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleChange(e) {
    const targetField = e.target.dataset.type;
    const targetValue = e.target.value;

    let newJob = JSON.parse(JSON.stringify(this.state.job));

    newJob[targetField] = targetValue;

    this.setState({
      job: newJob
    });

    this.props.onChange(this.state.job);
  }

  handleDescriptionChange(description) {
    this.setState({
      job: {
        ...this.state.job,
        description: description
      }
    });
  }

  render() {
    const { title, yearStart, yearEnd, currentlyWorking, companyName, description, id } = this.state.job;

    let titleContent, yearsContent, companyContent;

    if (this.props.isEditOn) {

      // Display info as input fields
      titleContent = <input
                    type="text"
                    value={title}
                    placeholder="Job Title"
                    onChange={this.handleChange}
                    data-id={id}
                    data-type="title"
                    key={id + '-title'}
                  />;
      yearsContent = [<input
                    type="text"
                    value={yearStart}
                    placeholder="Year Start"
                    onChange={this.handleChange}
                    data-id={id}
                    data-type="yearStart"
                    key={id + '-yearStart'}
                  />,
                  <input
                    type="text"
                    value={yearEnd}
                    placeholder="Year End"
                    onChange={this.handleChange}
                    data-id={id}
                    data-type="yearEnd"
                    key={id + '-yearEnd'}
                  />];
      companyContent = <input
                    type="text"
                    value={companyName}
                    placeholder="Company"
                    onChange={this.handleChange}
                    data-id={id}
                    data-type="companyName"
                    key={id + '-company'}
                  />;

    } else {

      // Display info as text
      titleContent = title;
      yearsContent = yearStart + ' - ' + yearEnd;
      companyContent = companyName;

    }

    return(
      <table>
        <tbody>
          <tr>
            <td>{titleContent}</td>
            <td>{yearsContent}</td>
          </tr>
          <tr>
            <td>{companyContent}</td>
          </tr>
          <tr>
            <td>
              <Description
                info={description}
                isEditOn={this.props.isEditOn}
                onChange={this.handleDescriptionChange}
                jobId={id}
              />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Job
