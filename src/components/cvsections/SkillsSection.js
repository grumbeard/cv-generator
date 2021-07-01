import React, { Component } from 'react';
import uniqid from 'uniqid';

class SkillsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillsInfo: this.props.skillsInfo,
      isEditOn: false
    }

    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);
  }

  handleAddSkill() {
    let newSkills = JSON.parse(JSON.stringify(this.state.skillsInfo));

    newSkills.push({
      name: '',
      rating: null,
      id: uniqid()
    });

    this.setState({
      skillsInfo: newSkills
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
    this.props.onSave(this.state.skillsInfo);
  }

  handleCancel() {
    this.setState({
      skillsInfo: this.props.skillsInfo,
      isEditOn: false
    });
  }

  handleChange(e) {
    let targetValue = e.target.value;
    let targetField = e.target.dataset.type;
    let index = e.target.dataset.index;

    let newSkills = JSON.parse(JSON.stringify(this.state.skillsInfo));

    let newSkill = newSkills[index];
    newSkill[targetField] = targetValue;

    newSkills.splice(index, 1, newSkill);

    this.setState({
      skillsInfo: newSkills
    });
  }

  componentDidMount() {
    // Create sample data if needed
    if (this.state.skillsInfo.length === 0) this.handleAddSkill();
    this.handleSave();
  }

  render() {
    let skills = [];
    let skillsInfo = JSON.parse(JSON.stringify(this.state.skillsInfo));

    if (this.state.isEditOn) {

      // Display info as input fields
      skillsInfo.forEach((skill, index) => {
        skills.push(
          <li key={skill.id}>
            <input
              type="text"
              value={skill.name ? skill.name : ''}
              placeholder="Competency X"
              onChange={this.handleChange}
              data-type="name"
              data-index={index}
            />
            <input
              type="number"
              value={skill.rating ? skill.rating : ''}
              onChange={this.handleChange}
              data-type="rating"
              data-index={index}
            />
          </li>
        );
      });

    } else {

      // Display info as text
      skillsInfo.forEach(skill => {
        skills.push(
          // Check if value exists for field
          <li key={skill.id}>
            <p>{skill.name ? skill.name : 'Competency X'}</p>
            <p>{skill.rating ? skill.rating : 3}</p>
          </li>
        );
      });

    }

    // Filter control options displayed
    let controls = [];

    let editBtn = <div onClick={this.handleToggleEdit} key="skills-edit">EDIT</div>;
    let saveBtn = <div onClick={this.handleSave} key="skills-save">SAVE</div>;
    let cancelBtn = <div onClick={this.handleCancel} key="skills-cancel">CANCEL</div>;
    let addSkillBtn = <div onClick={this.handleAddSkill} key="work-add">ADD SKILL</div>;

    if (this.state.isEditOn) {
      controls.push(addSkillBtn, cancelBtn, saveBtn);
    } else {
      controls.push(editBtn);
    }

    return(
      <div>
        <ul>
          {skills}
        </ul>
        {controls}
      </div>
    )
  }
}

export default SkillsSection
