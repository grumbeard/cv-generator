import React, { Component } from 'react';
import uniqid from 'uniqid';
import { EditButton, SaveButton, CancelButton, AddButton, DeleteButton } from '../buttons'
import '../../styles/components/cvsections/SkillsSection.css'

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
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(e) {
    e.stopPropagation();
    console.log(e.target);

    const skillId = e.target.dataset.id;
    const skillIndex = this.state.skillsInfo.findIndex(skill => skill.id === skillId);

    let newSkillsInfo = JSON.parse(JSON.stringify(this.state.skillsInfo));

    newSkillsInfo.splice(skillIndex, 1);

    this.setState({
      skillsInfo:newSkillsInfo
    });
  }

  componentDidMount() {
    // Create sample data if needed
    if (this.state.skillsInfo.length === 0) this.handleAddSkill();
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
              minlength="2"
              maxlength="45"
              size="30"
              placeholder="Competency X"
              onChange={this.handleChange}
              data-type="name"
              data-index={index}
            />
            <input
              type="number"
              value={skill.rating ? skill.rating : ''}
              min="1"
              max="5"
              onChange={this.handleChange}
              data-type="rating"
              data-index={index}
            />
          </li>
        );

        if (this.state.isEditOn) {
          skills.push(
            <DeleteButton
              onClick={this.handleDelete}
              key={skill.id + "-delete"}
              id={skill.id}
            />
          );
        }
      });

    } else {

      // Display info as text
      skillsInfo.forEach(skill => {
        skills.push(
          // Check if value exists for field
          <li key={skill.id} className="skill">
            <p className="skill-name">{skill.name ? skill.name : 'Competency X'}</p>
            <div className="skill-rating-container">
              <div className={skill.rating ? "skill-rating skill-rating-" + skill.rating.toString() : "skill-rating skill-rating-3"}>
              </div>
            </div>
          </li>
        );
      });

    }

    // Filter control options displayed
    let controls = [];

    let editBtn = <EditButton onClick={this.handleToggleEdit} key="skill-edit" />;
    let saveBtn = <SaveButton onClick={this.handleSave} key="skill-save" />;
    let cancelBtn = <CancelButton onClick={this.handleCancel} key="skill-cancel" />;
    let addSkillBtn = <AddButton onClick={this.handleAddSkill} key="skill-add" />;

    if (this.state.isEditOn) {
      controls.push(addSkillBtn, cancelBtn, saveBtn);
    } else {
      controls.push(editBtn);
    }

    return(
      <div className="skills-section cv-section">
        <h2 className="section-title">Key Competencies</h2>
        <ul>
          {skills}
        </ul>
        {controls}
      </div>
    )
  }
}

export default SkillsSection
