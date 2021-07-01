import React, { Component } from 'react';
import uniqid from 'uniqid';

class EducationSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationInfo: this.props.educationInfo,
      isEditOn: false
    }

    this.handleAddEducation = this.handleAddEducation.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Add sample data if needed
    if (this.props.educationInfo.length === 0) this.handleAddEducation();
  }

  handleChange(e) {
    let targetValue = e.target.value;
    let targetField = e.target.dataset.type;
    let index = e.target.dataset.index;

    let newEducationInfo = JSON.parse(JSON.stringify(this.state.educationInfo));

    let newSchool = newEducationInfo[index];
    newSchool[targetField] = targetValue;

    newEducationInfo.splice(index, 1, newSchool);

    this.setState({
      educationInfo: newEducationInfo
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

    this.props.onSave(this.state.educationInfo);
  }

  handleCancel() {
    this.setState({
      educationInfo: this.props.educationInfo,
      isEditOn: false
    });
  }

  handleAddEducation() {
    let newEducationInfo = JSON.parse(JSON.stringify(this.state.educationInfo));
    let newSchool = {
      name: '',
      qualification: '',
      yearStart: null,
      yearEnd: null,
      id: uniqid()
    }

    newEducationInfo.push(newSchool);

    this.setState({
      educationInfo: newEducationInfo
    });
  }

  render() {
    let educationList = [];
    let educationInfo = JSON.parse(JSON.stringify(this.state.educationInfo));

    if (this.state.isEditOn) {

      // Display info as input fields
      educationInfo.forEach((school, index) => {
        educationList.push(
          <li key={school.id}>
            <input
              type="text"
              value={school.name ? school.name : ''}
              placeholder="Institution X"
              onChange={this.handleChange}
              data-type="name"
              data-index={index}
            />
            <input
              type="text"
              value={school.qualification ? school.qualification : ''}
              placeholder="Institution X"
              onChange={this.handleChange}
              data-type="qualification"
              data-index={index}
            />
            <input
              type="number"
              value={school.yearStart ? school.yearStart : ''}
              placeholder="2000"
              onChange={this.handleChange}
              data-type="yearStart"
              data-index={index}
            />
            <input
              type="number"
              value={school.yearEnd ? school.yearEnd : ''}
              placeholder="2010"
              onChange={this.handleChange}
              data-type="yearEnd"
              data-index={index}
            />
          </li>
        );
      });

    } else {

      // Display info as text
      educationInfo.forEach(school => {
        let schoolName = school.name ? school.name : 'Institution X';
        let schoolQualification = school.qualification ? school.qualification : 'Degree Y';
        let schoolYears = (school.yearStart ? school.yearStart : 2000)
                           + ' - '
                           + (school.yearEnd ? school.yearEnd : 2010);

        educationList.push(
          <li key={school.id}>
            {schoolName} - {schoolQualification} ({schoolYears})
          </li>
        );
      });
    }

    // Filter control options displayed
    let controls = [];

    let addEducationBtn = <div onClick={this.handleAddEducation} key="education-add">ADD JOB</div>;
    let editBtn = <div onClick={this.handleToggleEdit} key="education-edit">EDIT</div>;
    let saveBtn = <div onClick={this.handleSave} key="education-save">SAVE</div>;
    let cancelBtn = <div onClick={this.handleCancel} key="education-cancel">CANCEL</div>;

    // Hide Add Job and Save unless in edit mode
    if (this.state.isEditOn) {
      controls.push(addEducationBtn, cancelBtn, saveBtn);
    } else {
      controls.push(editBtn);
    }

    return(
      <div>
        <ul>
          {educationList}
        </ul>
        {controls}
      </div>
    )
  }
}

export default EducationSection
