import React, { Component } from 'react';

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
              placeholder="Your Name"
              onChange={this.handleChange}
            />;

    } else {

      // Display info as text
      name = <h1>{this.state.name ? this.state.name : 'Your Name'}</h1>;

    }

    // Filter control options displayed
    let controls = [];

    let editBtn = <div onClick={this.handleToggleEdit} key="name-edit">EDIT</div>;
    let saveBtn = <div onClick={this.handleSave} key="name-save">SAVE</div>;
    let cancelBtn = <div onClick={this.handleCancel} key="name-cancel">CANCEL</div>;

    if (this.state.isEditOn) {
      controls.push(cancelBtn, saveBtn);
    } else {
      controls.push(editBtn);
    }

    return(
      <div>
        {name}
        {controls}
      </div>
    )
  }
}

export default NameSection
