import React, { Component } from 'react';
import NameSection from './cvsections/NameSection';
import ContactInfoSection from './cvsections/ContactInfoSection';

class CVForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      profile: {
        summary: 'professional summary'
      },
      contactInfo: {
        mobile: '',
        email: '',
        linkedIn: ''
      },
      skillsInfo: [],
      educationInfo: [],
      workInfo: []
    }

    this.handleNameSave = this.handleNameSave.bind(this);
    this.handleContactSave = this.handleContactSave.bind(this);
  }

  handleNameSave(name) {
    this.setState({
      name: name
    });
  }

  handleContactSave(contactInfo) {
    this.setState({
      contactInfo: contactInfo
    });
  }

  render() {
    return(
      <div>
        <NameSection
          name={this.state.name}
          onSave={this.handleNameSave}
        />
        <ContactInfoSection
          contactInfo={this.state.contactInfo}
          onSave={this.handleContactSave}
        />
      </div>
    );
  }
}

export default CVForm
