import React, { Component } from 'react';
import { EditButton, SaveButton, CancelButton } from '../buttons'
import '../../styles/components/cvsections/ContactInfoSection.css'

class ContactInfoSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactInfo: {
        mobile: this.props.contactInfo.mobile,
        email: this.props.contactInfo.email,
        linkedIn: this.props.contactInfo.linkedIn
      },
      isEditOn: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(e) {
    let type = e.target.dataset.type;

    switch (type) {
      case 'mobile':
        this.setState({
          contactInfo: { ...this.state.contactInfo, mobile: e.target.value }
        });
        break;
      case 'email':
        this.setState({
          contactInfo: { ...this.state.contactInfo, email: e.target.value }
        });
        break;
      case 'linkedIn':
        this.setState({
          contactInfo: { ...this.state.contactInfo, linkedIn: e.target.value }
        });
        break;
      default:
        return;
    }
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
    this.props.onSave(this.state.contactInfo);
  }

  handleCancel() {
    this.setState({
      contactInfo: this.props.contactInfo,
      isEditOn: false
    });
  }

  render() {
    let contactInfo = [];
    let allInfo = JSON.parse(JSON.stringify(this.state.contactInfo));

    const icons = {
      mobile: <span className="material-icons-round contact-icon">phone</span>,
      email: <span className="material-icons-round contact-icon">email</span>,
      linkedIn: <span className="material-icons-round contact-icon">work</span>
    }

    for (let info in allInfo) {

      // Check if being edited
      if (this.state.isEditOn) {

        // Display info as input fields
        contactInfo.push(
          <input
            type="text"
            value={allInfo[info] ? allInfo[info] : ''}
            minlength="4"
            maxlength="40"
            size="30"
            placeholder={info[0].toUpperCase() + info.substring(1)}
            onChange={this.handleChange}
            data-type={info}
            key={info}
          />
        )

      } else {

        // Display info as text
        contactInfo.push(
          // Check if no value available for field
          allInfo[info] ?
          <li key={info} className="contact">{icons[info]}{allInfo[info]}</li> :
          <li key={info} className="contact">{icons[info]}{info[0].toUpperCase() + info.substring(1)}</li>
        );

      }
    }

    // Filter control options displayed
    let controls = [];

    let editBtn = <EditButton onClick={this.handleToggleEdit} key="contact-edit" />;
    let saveBtn = <SaveButton onClick={this.handleSave} key="contact-save" />;
    let cancelBtn = <CancelButton onClick={this.handleCancel} key="contact-cancel" />;

    if (this.state.isEditOn) {
      controls.push(cancelBtn, saveBtn);
    } else {
      controls.push(editBtn);
    }

    return(
      <div className="contact-info-section cv-section">
        <h2 className="section-title">Contact</h2>
        <ul>
          {contactInfo}
        </ul>
        {controls}
      </div>
    );
  }
}

export default ContactInfoSection
