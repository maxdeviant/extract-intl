import React from 'react';
import ComponentB from './b';

export default class ComponentA extends React.Component {
  getTitle() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({
      id: 'component_a.title',
      defaultMessage: 'Component A'
    });
  }

  getBodyText() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({
      id: 'component_a.body_text',
      defaultMessage: 'Hello there!'
    });
  }

  render() {
    return (
        <div>
          <h1>
            {this.getTitle()}
          </h1>
          <div>
            <ComponentB>
              <p>
                {this.getBodyText()}
              </p>
            </ComponentB>
          </div>
        </div>
    );
  }
}
