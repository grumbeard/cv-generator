import React, { Component } from 'react'

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

    let editBtn = <div onClick={this.handleToggleEdit} key="contact-edit">EDIT</div>;
    let saveBtn = <div onClick={this.handleSave} key="contact-save">SAVE</div>;
    let cancelBtn = <div onClick={this.handleCancel} key="contact-cancel">CANCEL</div>;

    if (this.state.isEditOn) {
      controls.push(cancelBtn, saveBtn);
    } else {
      controls.push(editBtn);
    }

    return(
      <div>
        {summary}
        {controls}
      </div>
    )
  }
}

export default ProfileSection
