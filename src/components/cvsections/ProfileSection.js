import React, { Component } from 'react'
import { EditButton, SaveButton, CancelButton } from '../buttons'
import '../../styles/components/cvsections/ProfileSection.css'

class ProfileSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        summary: this.props.profile.summary
      },
      isEditOn: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    this.setState({
      profile: {
        summary: e.target.value
      }
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
    this.props.onSave(this.state.profile);
  }

  handleCancel() {
    this.setState({
      profile: this.props.profile,
      isEditOn: false
    });
  }

  render() {
    let summary;
    if (this.state.isEditOn) {

      // Display info as input field
      summary = <textarea
                  value={this.state.profile.summary ? this.state.profile.summary : ''}
                  placeholder="Professional Summary"
                  onChange={this.handleChange}
                >
                </textarea>;

    } else {

      // Display info as text
      summary = <p>{this.state.profile.summary ? this.state.profile.summary : 'Professional Summary'}</p>

    }

    // Filter control options displayed
    let controls = [];

    let editBtn = <EditButton onClick={this.handleToggleEdit} key="profile-edit" />;
    let saveBtn = <SaveButton onClick={this.handleSave} key="profile-save" />;
    let cancelBtn = <CancelButton onClick={this.handleCancel} key="profile-cancel" />;

    if (this.state.isEditOn) {
      controls.push(cancelBtn, saveBtn);
    } else {
      controls.push(editBtn);
    }

    return(
      <div className="profile-section cv-section">
        <h2 className="section-title">Profile</h2>
        {summary}
        {controls}
      </div>
    )
  }
}

export default ProfileSection
