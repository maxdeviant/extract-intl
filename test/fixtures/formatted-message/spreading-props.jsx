import React from 'react'
import { FormattedMessage } from 'react-intl'

const SpreadingProps = () => {
  const messageDescriptor = {
    id: 'spreading_props.dynamic',
    defaultMessage: 'This should work'
  }

  return (
    <div>
      <h2>
        <FormattedMessage
          id="spreading_props.title"
          defaultMessage="Hello, World"
        />
      </h2>
      <h3>
        <FormattedMessage {...messageDescriptor} />
      </h3>
    </div>
  )
}

export default SpreadingProps
