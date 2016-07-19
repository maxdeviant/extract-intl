import React from 'react';

export default class Footer extends React.Component {
  getFooterText() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({ id: 'footer.text', defaultMessage: 'Copyright (c) 2016' });
  }

  getCopyrightText() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({id:'footer.copyright',defaultMessage:'ALL RIGHTS RESERVED'});
  }

  render() {
    return (
        <footer>
          {this.getFooterText()}
        </footer>
    );
  }
}
