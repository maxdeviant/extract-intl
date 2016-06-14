import React from 'react';

export default class ComponentB extends React.Component {
  getTitle() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({
      id: 'component_b.title',
      defaultMessage: 'Component B'
    });
  }

  render() {
    const { children } = this.props;

    return (
        <div>
          <h2>
            {this.getTitle()}
          </h2>
          <div>
            {children}
          </div>
        </div>
    );
  }
}
