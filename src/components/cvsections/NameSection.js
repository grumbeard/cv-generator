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
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleToggleEdit() {
    this.setState({
      isEditOn: !this.state.isEditOn
    });
  }

  handleSave() {
    this.setState({
      isEditOn: false
    });
    this.props.onSave(this.state.name)
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

    return(
      <div>
        {name}
        <div onClick={this.handleToggleEdit}>EDIT</div>
        <div onClick={this.handleSave}>SAVE</div>
      </div>
    )
  }
}

export default NameSection
