import React from 'react';

export default class Footer extends React.Component {
  getTitleText() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({
        id: "footer.title",
        defaultMessage: `This footer is bangin'`
    });
  }

  getFooterText() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({
        id: "footer.text",
        defaultMessage: "Copyright (c) 2016"
    });
  }

  getCopyrightText() {
    const { intl: { formatMessage } } = this.props;

    return formatMessage({
        id: `footer.copyright`,
        defaultMessage: `ALL RIGHTS RESERVED`
    });
  }

  render() {
    return (
        <footer>
          <h1>
            {getTitleText()}
          </h1>
          {this.getFooterText()}
        </footer>
    );
  }
}
