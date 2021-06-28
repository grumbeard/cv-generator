import React, { Component } from 'react'
import NameSection from './cvsections/NameSection';

class CVForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      profile: {
        summary: 'professional summary'
      },
      contactInfo: [
        {mobile: ''},
        {email: ''},
        {linkedIn: ''}
      ],
      skillsInfo: [],
      educationInfo: [],
      workInfo: []
    }

    this.handleNameSave = this.handleNameSave.bind(this);
  }

  handleNameSave(name) {
    this.setState({
      name: name
    });
  }

  render() {
    return(
      <NameSection
        name={this.state.name}
        onSave={this.handleNameSave}
      />
    );
  }
}

export default CVForm
