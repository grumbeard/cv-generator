import React, { Component } from 'react';
import { EditButton, SaveButton, CancelButton } from '../buttons'
import '../../styles/components/cvsections/NameSection.css'

class NameSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      isEditOn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
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
    this.props.onSave(this.state.name)
  }

  handleCancel() {
    this.setState({
      name: this.props.name,
      isEditOn: false
    });
  }

  render() {
    let name;
    if (this.state.isEditOn) {

      // Display info as input field
      name = <input
              type="text"
              value={this.state.name ? this.state.name : ''}
              minlength="4"
              maxlength="30"
              size="35"
              placeholder="Your Name"
              onChange={this.handleChange}
            />;

    } else {

      // Display info as text
      name = <h1>{this.state.name ? this.state.name : 'Your Name'}</h1>;

    }

    // Filter control options displayed
    let controls = [];

    let editBtn = <EditButton onClick={this.handleToggleEdit} key="name-edit" />;
    let saveBtn = <SaveButton onClick={this.handleSave} key="name-save" />;
    let cancelBtn = <CancelButton onClick={this.handleCancel} key="name-cancel" />;

    if (this.state.isEditOn) {
      controls.push(cancelBtn, saveBtn);
    } else {
      controls.push(editBtn);
    }

    return(
      <div className="name-section cv-section">
        {name}
        {controls}
      </div>
    )
  }
}

export default NameSection
