import React from 'react'
import { FormattedMessage } from 'react-intl'
import ComponentB from './b'

export default class ComponentA extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage
            id="component_a.title"
            defaultMessage="Component A"
          />
        </h1>
        <div>
          <ComponentB>
            <p>
              <FormattedMessage
                id="component_a.body_text"
                defaultMessage="Hello there!"
              />
            </p>
          </ComponentB>
        </div>
      </div>
    )
  }
}
