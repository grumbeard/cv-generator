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
    newDescription.push('');

    this.handleDescriptionChange(newDescription);
  }

  render() {
    const { title, yearStart, yearEnd, currentlyWorking, companyName, description, id } = this.props.job;

    let titleContent, yearsContent, companyContent;

    if (this.props.isEditOn) {

      // Display info as input fields
      titleContent = <input
                    type="text"
                    value={title ? title : ''}
                    placeholder="Job Title"
                    onChange={this.handleChange}
                    data-id={id}
                    data-type="title"
                    key={id + '-title'}
                  />;
      yearsContent = [<input
                    type="text"
                    value={yearStart ? yearStart : ''}
                    placeholder="Year Start"
                    onChange={this.handleChange}
                    data-id={id}
                    data-type="yearStart"
                    key={id + '-yearStart'}
                  />,
                  <input
                    type="text"
                    value={yearEnd ? yearEnd : ''}
                    placeholder="Year End"
                    onChange={this.handleChange}
                    data-id={id}
                    data-type="yearEnd"
                    key={id + '-yearEnd'}
                  />];
      companyContent = <input
                    type="text"
                    value={companyName ? companyName : ''}
                    placeholder="Company X"
                    onChange={this.handleChange}
                    data-id={id}
                    data-type="companyName"
                    key={id + '-company'}
                  />;

    } else {

      // Display info as text
      titleContent = title ? title : 'Job Title';
      yearsContent = (yearStart ? yearStart : 2000) + ' - ' + (yearEnd ? yearEnd : 2010);
      companyContent = (companyName ? companyName : 'Company X');

    }


    return(
      <table className="job-entry">
        <tbody>
          <tr>
            <td className="job-title" colSpan="2">{titleContent}</td>
          </tr>
          <tr className="company-years-row">
            <td className="job-company" colSpan="1">{companyContent}</td>
            <td className="job-years" colSpan="1">{yearsContent}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <Description
                description={description}
                isEditOn={this.props.isEditOn}
                onChange={this.handleDescriptionChange}
                jobId={id}
                onAddDescription={this.handleAddDescription}
              />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Job
