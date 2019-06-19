import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'

export default class HTMLComponent extends React.Component {
  render() {
    return (
      <FormattedHTMLMessage
        id="html_component.title"
        defaultMessage="HTML <em>Component</em>"
      />
    )
  }
}
