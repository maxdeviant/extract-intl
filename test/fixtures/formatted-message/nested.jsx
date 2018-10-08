import React from 'react'
import { FormattedMessage } from 'react-intl'

export default class Nested extends React.Component {
  render() {
    return (
      <div>
        <h2>
          <FormattedMessage
            id="nested.title"
            defaultMessage="I understand this will delete {all} my data"
            values={{
              all: (
                <strong>
                  <FormattedMessage id="nested.all" defaultMessage="ALL" />
                </strong>
              )
            }}
          />
        </h2>
      </div>
    )
  }
}
