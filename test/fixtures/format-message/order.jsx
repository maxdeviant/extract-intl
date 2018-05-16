import React from 'react'

export default class UserProfile extends React.Component {
  getTitle() {
    const {
      intl: { formatMessage }
    } = this.props

    return formatMessage({
      description: 'The title for the user profile.',
      defaultMessage: 'UserProfile',
      id: 'user_profile.title'
    })
  }

  render() {
    ;<div>
      <h1>{this.getTitle()}</h1>
    </div>
  }
}
