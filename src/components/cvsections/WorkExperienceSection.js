import React, { Component } from 'react';
import uniqid from 'uniqid';
import Job from './Job';

class WorkExperienceSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workInfo: this.props.workInfo,
      isEditOn: false
    }

    this.handleJobChange = this.handleJobChange.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleJobChange(job) {
    const jobId = job.id;
    const jobIndex = this.state.workInfo.findIndex(job => job.id === jobId);

    let newWorkInfo = JSON.parse(JSON.stringify(this.state.workInfo));

    newWorkInfo.splice(jobIndex, 1, job);

    this.setState({
      workInfo: newWorkInfo
    });
  }

  handleToggleEdit() {
    this.setState({
      isEditOn: !this.state.isEditOn
    });
  }

  handleSave() {
    this.setState({
      isEditOn: false
    });

    this.props.onSave(this.state.workInfo);
  }

  componentDidMount() {
    // Create sample data if needed
    if (this.state.workInfo.length === 0) this.useExampleData();
  }

  useExampleData() {
    this.setState({
      workInfo: [{
        title: 'job title',
        yearStart: '2000',
        yearEnd: '2010',
        currentlyWorking: false,
        companyName: 'Company A',
        description: ['Summary of Achievements'],
        id: uniqid()
      }]
    });
  }

  render() {
    let jobs = [];
    let workInfo = JSON.parse(JSON.stringify(this.state.workInfo));

      // Create one entry per job
      workInfo.forEach(job => {
        jobs.push(
          <Job
            job={job}
            isEditOn={this.state.isEditOn}
            key={job.id}
            onChange={this.handleJobChange}
          />
        );
      });

    return(
      <div>
        {jobs}
        <div onClick={this.handleToggleEdit}>EDIT</div>
        <div onClick={this.handleSave}>SAVE</div>
      </div>
    )
  }
}

export default WorkExperienceSection
