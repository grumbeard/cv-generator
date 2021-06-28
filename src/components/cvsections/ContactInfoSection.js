import React, { Component } from 'react';

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
      isEditOn: !this.state.isEditOn
    });
  }

  handleSave() {
    this.setState({
      isEditOn: false
    });
    this.props.onSave(this.state.contactInfo);
  }

  render() {
    let contactInfo = [];
    let allInfo = JSON.parse(JSON.stringify(this.state.contactInfo));

    for (let info in allInfo) {

      // Check if being edited
      if (this.state.isEditOn) {

        // Display info as input fields
        contactInfo.push(
          <input
            type="text"
            value={allInfo[info] ? allInfo[info] : ''}
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
          <li key={info}>{allInfo[info]}</li> :
          <li key={info}>{info[0].toUpperCase() + info.substring(1)}</li>
        );

      }
    }

    return(
      <div>
        <ul>
          {contactInfo}
        </ul>
        <div onClick={this.handleToggleEdit}>EDIT</div>
        <div onClick={this.handleSave}>SAVE</div>
      </div>
    );
  }
}

export default ContactInfoSection
