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
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAddJob = this.handleAddJob.bind(this);
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
      isEditOn: true
    });
  }

  handleSave() {
    this.setState({
      isEditOn: false
    });

    this.props.onSave(this.state.workInfo);
  }

  handleCancel() {
    this.setState({
      workInfo: this.props.workInfo,
      isEditOn: false
    });
  }

  handleAddJob() {
    let newWorkInfo = JSON.parse(JSON.stringify(this.state.workInfo));
    newWorkInfo.push({
      title: 'job title',
      yearStart: '2000',
      yearEnd: '2010',
      currentlyWorking: false,
      companyName: 'Company A',
      description: ['Summary of Achievements'],
      id: uniqid()
    });

    this.setState({
      workInfo: newWorkInfo
    });
  }

  componentDidMount() {
    // Create sample data if needed
    if (this.state.workInfo.length === 0) this.handleAddJob();
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

    // Filter control options displayed
    let controls = [];

    let addJobBtn = <div onClick={this.handleAddJob} key="work-add">ADD JOB</div>;
    let editBtn = <div onClick={this.handleToggleEdit} key="work-edit">EDIT</div>;
    let saveBtn = <div onClick={this.handleSave} key="work-save">SAVE</div>;
    let cancelBtn = <div onClick={this.handleCancel} key="work-cancel">CANCEL</div>;

    // Hide Add Job and Save unless in edit mode
    if (this.state.isEditOn) {
      controls.push(addJobBtn, cancelBtn, saveBtn);
    } else {
      controls.push(editBtn);
    }

    return(
      <div>
        {jobs}
        {controls}
      </div>
    )
  }
}

export default WorkExperienceSection
