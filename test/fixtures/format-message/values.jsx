import React from 'react'

export default class Footer extends React.Component {
  getFooterText() {
    const {
      intl: { formatMessage }
    } = this.props

    return formatMessage({
      id: 'footer.text',
      defaultMessage: 'Copyright (c) {year}',
      values: {
        year: Date.now().getFullYear()
      }
    })
  }

  render() {
    return <footer>{this.getFooterText()}</footer>
  }
}
