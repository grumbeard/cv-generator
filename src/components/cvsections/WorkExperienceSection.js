import React, { Component } from 'react';
import uniqid from 'uniqid';
import Job from './Job';
import { EditButton, SaveButton, CancelButton, AddButton } from '../buttons';
import '../../styles/components/cvsections/WorkExperienceSection.css';

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
    this.handleDelete = this.handleDelete.bind(this);
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
      title: '',
      yearStart: null,
      yearEnd: null,
      currentlyWorking: false,
      companyName: '',
      description: [''],
      id: uniqid()
    });

    this.setState({
      workInfo: newWorkInfo
    });
  }

  handleDelete(e) {
    e.stopPropagation();
    const jobId = e.target.dataset.id;
    const jobIndex = this.state.workInfo.findIndex(job => job.id === jobId);

    let newWorkInfo = JSON.parse(JSON.stringify(this.state.workInfo));

    newWorkInfo.splice(jobIndex, 1);

    this.setState({
      workInfo:newWorkInfo
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
          onDeleteJob={this.handleDelete}
        />
      );
    });

    // Filter control options displayed
    let controls = [];

    let addJobBtn = <AddButton onClick={this.handleAddJob} key="job-add" />;
    let editBtn = <EditButton onClick={this.handleToggleEdit} key="work-edit" />;
    let saveBtn = <SaveButton onClick={this.handleSave} key="work-save" />;
    let cancelBtn = <CancelButton onClick={this.handleCancel} key="work-cancel" />;

    // Hide Add Job and Save unless in edit mode
    if (this.state.isEditOn) {
      controls.push(addJobBtn, cancelBtn, saveBtn);
    } else {
      controls.push(editBtn);
    }

    return(
      <div className="work-experience-section cv-section">
        <h2 className="section-title">Work Experience</h2>
        {jobs}
        {controls}
      </div>
    )
  }
}

export default WorkExperienceSection
