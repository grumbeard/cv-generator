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

    return(
      <div>
        {summary}
        <div onClick={this.handleToggleEdit}>EDIT</div>
        <div onClick={this.handleSave}>SAVE</div>
      </div>
    )
  }
}

export default ProfileSection
