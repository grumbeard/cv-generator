import React, { Component } from 'react';
import NameSection from './cvsections/NameSection';
import ContactInfoSection from './cvsections/ContactInfoSection';
import ProfileSection from './cvsections/ProfileSection';

class CVForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      profile: {
        summary: ''
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
    this.handleProfileSave = this.handleProfileSave.bind(this);
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

  handleProfileSave(profile) {
    this.setState({
      profile: profile
    })
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
        <ProfileSection
          profile={this.state.profile}
          onSave={this.handleProfileSave}
        />
      </div>
    );
  }
}

export default CVForm
