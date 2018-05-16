import React from 'react'
import { FormattedMessage } from 'react-intl'

export default class ComponentB extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <h2>
          <FormattedMessage
            id="component_b.title"
            defaultMessage="Component B"
          />
        </h2>
        <div>{children}</div>
      </div>
    )
  }
}
