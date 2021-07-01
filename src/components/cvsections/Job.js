import React, { Component } from 'react';
import Description from './Description';

class Job extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleAddDescription = this.handleAddDescription.bind(this);
  }

  handleChange(e) {
    const targetField = e.target.dataset.type;
    const targetValue = e.target.value;

    let newJob = JSON.parse(JSON.stringify(this.props.job));

    newJob[targetField] = targetValue;

    this.props.onChange(newJob);
  }

  handleDescriptionChange(description) {
    let newJob = JSON.parse(JSON.stringify(this.props.job));

    newJob.description = description;

    this.props.onChange(newJob);
  }

  handleAddDescription() {
    let newDescription = JSON.parse(JSON.stringify(this.props.job.description));
    newDescription.push('Summary of Achievements');

    this.handleDescriptionChange(newDescription);
  }

  render() {
    const { title, yearStart, yearEnd, currentlyWorking, companyName, description, id } = this.props.job;

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

    // Filter control options displayed
    let controls = [];

    let addLineBtn = <div onClick={this.handleAddDescription}>ADD LINE</div>;

    if (this.props.isEditOn) {
      controls.push(addLineBtn);
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
                description={description}
                isEditOn={this.props.isEditOn}
                onChange={this.handleDescriptionChange}
                jobId={id}
              />
              {controls}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Job
