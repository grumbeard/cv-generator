import React, { Component } from 'react';
import uniqid from 'uniqid';

import '../styles/components/CVForm.css'
import NameSection from './cvsections/NameSection';
import ContactInfoSection from './cvsections/ContactInfoSection';
import ProfileSection from './cvsections/ProfileSection';
import WorkExperienceSection from './cvsections/WorkExperienceSection';
import SkillsSection from './cvsections/SkillsSection';
import EducationSection from './cvsections/EducationSection';

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
      skillsInfo: [{
        name: "Competency X",
        rating: 3,
        id: uniqid()
      }],
      educationInfo: [{
        name: 'Institution X',
        qualification: 'Bachelor of Arts in Dark',
        yearStart: new Date().getFullYear() - 10,
        yearEnd: new Date().getFullYear() - 6,
        id: uniqid()
      }],
      workInfo: [{
        title: 'Job Title',
        yearStart: new Date().getFullYear() - 3,
        yearEnd: new Date().getFullYear(),
        currentlyWorking: true,
        companyName: 'Company X',
        description: ['Summary of Achievements'],
        id: uniqid()
      }]
    }

    this.handleNameSave = this.handleNameSave.bind(this);
    this.handleContactSave = this.handleContactSave.bind(this);
    this.handleProfileSave = this.handleProfileSave.bind(this);
    this.handleWorkExperienceSave = this.handleWorkExperienceSave.bind(this);
    this.handleSkillsSave = this.handleSkillsSave.bind(this);
    this.handleEducationSave = this.handleEducationSave.bind(this);
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
    });
  }

  handleWorkExperienceSave(workInfo) {
    this.setState({
      workInfo: workInfo
    });
  }

  handleSkillsSave(skillsInfo) {
    this.setState({
      skillsInfo: skillsInfo
    });
  }

  handleEducationSave(educationInfo) {
    this.setState({
      educationInfo: educationInfo
    });
  }

  render() {
    return(
      <div className="cv-form">
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
        <SkillsSection
          skillsInfo={this.state.skillsInfo}
          onSave={this.handleSkillsSave}
        />
        <EducationSection
          educationInfo={this.state.educationInfo}
          onSave={this.handleEducationSave}
        />
        <WorkExperienceSection
          workInfo={this.state.workInfo}
          onSave={this.handleWorkExperienceSave}
        />
      </div>
    );
  }
}

export default CVForm
