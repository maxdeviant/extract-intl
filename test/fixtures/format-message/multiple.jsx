import React from 'react';

export default class Footer extends React.Component {
  getFooterTitle() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({
      id: 'footer.title',
      defaultMessage: 'Why does a footer need a title?'
    });
  }

  getFooterText() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({
      id: 'footer.text',
      defaultMessage: 'Copyright (c) 2016'
    });
  }

  render() {
    return (
        <footer>
          <h1>
            {this.getFooterTitle()}
          </h1>
          {this.getFooterText()}
        </footer>
    );
  }
}
